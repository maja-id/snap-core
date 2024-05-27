import { IsEnum, IsISO8601, IsString } from "class-validator";

export class TokenHeaders {
  @IsString()
  @IsEnum(["application/json", "application/x-www-form-urlencoded"])
  "content-type": string;
  @IsString()
  authorization: string;
  @IsISO8601()
  "x-timestamp": string;
  @IsString()
  "x-signature"?: string;
  @IsString()
  "x-client-key"?: string;
}
