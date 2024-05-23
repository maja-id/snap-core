import { IsEnum, IsISO8601, IsNotEmpty, IsString } from "class-validator";

export class TransactionHeaders {
  @IsString()
  @IsEnum(["application/json", "application/x-www-form-urlencoded"])
  "Content-Type": string;

  @IsString()
  @IsNotEmpty()
  Authorization: string;

  @IsISO8601()
  @IsNotEmpty()
  "X-TIMESTAMP": string;

  @IsString()
  @IsNotEmpty()
  "X-SIGNATURE"?: string;

  @IsString()
  @IsNotEmpty()
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
