import { IsEnum, IsISO8601, IsString } from "class-validator";

export class TokenHeaders {
  @IsString()
  @IsEnum(["application/json", "application/x-www-form-urlencoded"])
  "Content-Type": string;
  @IsString()
  Authorization: string;
  @IsISO8601()
  "X-TIMESTAMP": string;
  @IsString()
  "X-SIGNATURE"?: string;
  @IsString()
  "X-CLIENT-KEY"?: string;
}
