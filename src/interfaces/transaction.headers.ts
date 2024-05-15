import { IsEnum, IsISO8601, IsString } from "class-validator";

export class TransactionHeaders {
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
  "X-PARTNER-ID": string;

  @IsString()
  "X-EXTERNAL-ID": string;

  @IsString()
  "X-IP-ADDRESS": string;

  @IsString()
  "X-DEVICE-ID": string;

  @IsString()
  "CHANNEL-ID": string;

  @IsString()
  "X-LATITUDE": string;

  @IsString()
  "X-LONGITUDE": string;

  @IsString()
  ORIGIN: string;
}
