import {
  IsISO8601,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Amount } from "../amount";

export class InquiryRequest {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsString()
  @IsNumberString()
  @MaxLength(28)
  virtualAccountNo: string;

  @IsISO8601()
  @MaxLength(25)
  @IsOptional()
  trxDateInit: string;

  @IsNumberString()
  @Length(4)
  channelCode: string;

  @IsString()
  @Length(2)
  @IsOptional()
  language: string;

  @IsNotEmptyObject()
  amount: Amount;

  @IsString()
  @Length(32)
  @IsOptional()
  hashedSourceAccountNo: string;

  @IsString()
  @Length(3)
  @IsOptional()
  sourceBankCode: string;

  @IsString()
  @MaxLength(64)
  @IsOptional()
  passApp: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, unknown>;
}
