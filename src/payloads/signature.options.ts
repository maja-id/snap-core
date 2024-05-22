import { IsEnum, IsISO8601, IsNotEmpty, IsString } from "class-validator";
export class SignatureOptions {
  @IsString()
  @IsEnum(["symetric", "asymetric"])
  type: string;
  @IsString()
  @IsNotEmpty()
  @IsEnum(["POST", "GET", "PUT", "DELETE"])
  httpMethod: string;
  @IsString()
  endpointUrl: string;
  @IsString()
  accessToken?: string;
  @IsISO8601()
  timestamp: string;
  requestBody: any;
}
