import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
} from "class-validator";

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
  @IsOptional()
  "x-external-id": string;

  @IsString()
  @IsOptional()
  "x-ip-address": string;

  @IsString()
  @IsOptional()
  "x-device-id": string;

  @IsString()
  @IsOptional()
  "channel-id": string;

  @IsString()
  @IsOptional()
  "x-latitude": string;

  @IsString()
  @IsOptional()
  "x-longitude": string;

  @IsString()
  @IsOptional()
  origin: string;
}
