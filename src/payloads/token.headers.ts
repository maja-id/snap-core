import { IsEnum, IsISO8601, IsOptional, IsString } from "class-validator";

export class TokenHeaders {
  @IsString()
  @IsEnum(["application/json", "application/x-www-form-urlencoded"])
  "content-type": string;
  @IsString()
  @IsOptional()
  authorization: string;
  @IsISO8601()
  "x-timestamp": string;
  @IsString()
  @IsOptional()
  "x-signature"?: string;
  @IsString()
  @IsOptional()
  "x-client-key"?: string;
}
