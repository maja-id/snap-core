import {
  IsISO8601,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsObject,
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
  @Length(28)
  virtualAccountNo: string;

  @IsISO8601()
  @MaxLength(25)
  trxDateInit: string;

  @IsNumberString()
  @Length(4)
  channelCode: string;

  @IsString()
  @Length(2)
  language: string;

  @IsNotEmptyObject()
  amount: Amount;

  @IsString()
  @Length(32)
  hashedSourceAccountNo: string;

  @IsString()
  @Length(3)
  sourceBankCode: string;

  @IsString()
  @MaxLength(64)
  passApp: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsObject()
  additionalInfo: Record<string, unknown>;
}
