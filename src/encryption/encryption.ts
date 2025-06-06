import { createHash, createHmac, sign } from "crypto";
import { SignatureOptions } from "../payloads/signature.options";
import { validateOrReject, validateSync } from "class-validator";
import { TokenHeaders } from "../payloads";

/**
 * SnapEncryption helper class
 */
export class SnapEncryption {
  clientId: string;
  clientSecret: string;
  privateKey: string;
  publicKey: string;

  constructor(options: {
    clientId: string;
    clientSecret: string;
    privateKey: string;
    publicKey?: string;
  }) {
    if (!options.clientId || !options.clientSecret) {
      throw new Error("clientId and clientSecret are required");
    }
    this.clientId = options.clientId;
    this.clientSecret = options.clientSecret;
    this.privateKey = options.privateKey || "";
    this.publicKey = options.publicKey || "";
  }

  /**
   * Generate Token Signature
   */
  generateTokenSignature(headers: TokenHeaders, encoding: "hex" | "base64" = "hex") {
    const stringToSign = headers["x-client-key"] + "|" + headers["x-timestamp"];
    return sign("sha256", Buffer.from(stringToSign), this.privateKey).toString(
      encoding || "hex",
    );
  }

  /**
   * Generate SNAP signature
   * Identify Signature Type used
   * Value:
   * - Symmetric Signature with AccessToken
   * - Asymmetric Signature without AccessToken
   **/
  generateSignature(data: SignatureOptions, encoding: "hex" | "base64" = "hex") {
    const validate = validateSync(data);
    if (validate.length > 0) {
      console.error("Validation error", JSON.stringify(validate));
      throw new Error("4010101: Validation error: " + JSON.stringify(validate));
    }

    if (data.type === "symetric") {
      return this.generateSymetricSignature(data, encoding);
    }

    if (data.type === "asymetric") {
      return this.generateAsymetricSignature(data, encoding);
    }

    throw Error("Invalid signature type");
  }

  /**
   * Based on https://apidevportal.aspi-indonesia.or.id/docs/standar-teknis-keamanan (page 22)
   * Dokumen Standar Teknis Keamanan
   * Spesifikasi teknis dari ASPI:
   * SHA256withRSA (clientSecret, stringToSign)
   * dengan formula
   * stringToSign = HTTPMethod +”:“
   *   + EndpointUrl +":“
   *   + Lowercase(HexEncode(SHA256(minify(RequestBody)))) + ":“
   *   + TimeStamp
   */
  public generateAsymetricSignature(data: SignatureOptions, encoding: "hex" | "base64" = "hex"): string {
    try {
      console.debug("Generating asymetric signature", data);
      if (data.type !== "asymetric") {
        throw new Error("type must be asymetric");
      }
      const httpMethod = data.httpMethod
        ? data.httpMethod.toUpperCase()
        : "POST";
      const stringifyRequestBody = JSON.stringify(data.requestBody);
      const hashedRequestBody = createHash("sha256")
        .update(stringifyRequestBody)
        .digest("hex");

      const lowerCaseHashedRequestBody = hashedRequestBody.toLowerCase();
      const stringToSign = `${httpMethod}:${data.endpointUrl}:${lowerCaseHashedRequestBody}:${data.timestamp}`;
      console.debug("stringToSign", stringToSign);

      const sha256sign = sign(
        "sha256",
        Buffer.from(stringToSign),
        this.privateKey,
      );
      const sha256signHex = sha256sign.toString(encoding);
      console.debug("sha256sign", sha256signHex);
      return sha256signHex;
    } catch (error) {
      console.error("error encrypting data", error);
      throw error;
    }
  }

  /**
   * Based on https://apidevportal.aspi-indonesia.or.id/docs/standar-teknis-keamanan (page 22)
   * Dokumen Standar Teknis Keamanan
   * Spesifikasi teknis dari ASPI:
   *  HMAC_SHA512 (clientSecret, stringToSign)
   *  dengan formula
   *  stringToSign = HTTPMethod + ”:“
   *    + EndpointUrl +":"
   *    + AccessToken +":“
   *    + Lowercase(HexEncode(SHA256(minify(RequestBody))))+ ":“
   *    + TimeStamp
   */
  public generateSymetricSignature(data: SignatureOptions, encoding: "hex" | "base64" = "hex"): string {
    try {
      console.debug("Generate symetric signature", data);
      if (data.type !== "symetric") {
        throw new Error("type must be symetric");
      }
      if (!data.accessToken) {
        throw new Error("accessToken is required");
      }
      const httpMethod = data.httpMethod
        ? data.httpMethod.toUpperCase()
        : "POST";
      const stringifyRequestBody = JSON.stringify(data.requestBody);
      const hashedRequestBody = createHash("sha256")
        .update(stringifyRequestBody)
        .digest("hex");

      const lowerCaseHashedRequestBody = hashedRequestBody.toLowerCase();
      const stringToSign = `${httpMethod}:${data.endpointUrl}:${data.accessToken}:${lowerCaseHashedRequestBody}:${data.timestamp}`;
      console.debug("stringToSign", stringToSign);

      const hmac = createHmac("sha512", this.clientSecret);
      hmac.update(stringToSign);
      const hmacEncryptedSign = hmac.digest(encoding);
      console.debug("Signature", hmacEncryptedSign);

      return hmacEncryptedSign;
    } catch (error: any) {
      console.error("error encrypting data", error);
      throw error;
    }
  }
}
