import { IsEnum, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class TransactionHeaders {
  @IsString()
  @IsEnum(["application/json", "application/x-www-form-urlencoded"])
  "content-type": string;

  @IsString()
  @IsNotEmpty()
  authorization: string;

  @IsISO8601()
  @IsNotEmpty()
  "x-timestamp": string;

  @IsString()
  @IsNotEmpty()
  "x-signature"?: string;

  @IsString()
  @IsNotEmpty()
  "x-partner-id": string;

  @IsString()
  "x-external-id": string;

  @IsString()
  "x-ip-address": string;

  @IsString()
  "x-device-id": string;

  @IsString()
  "channel-id": string;

  @IsString()
  "x-latitude": string;

  @IsString()
  "x-longitude": string;

  @IsString()
  origin: string;
}
