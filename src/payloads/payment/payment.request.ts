import {
  IsArray,
  IsEmail,
  IsEnum,
  IsHexadecimal,
  IsISO8601,
  IsNotEmpty,
  IsNotEmptyObject,
  IsNumberString,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  Max,
  MaxLength,
} from "class-validator";
import { Amount } from "../amount";
import { Description } from "../description";
import { PaymentType } from "../../enumerations/payment-type.enum";
import { FlagAdvise } from "../../enumerations/flag-advise.enum";
import { PaymentRequestBillDetail } from "./payment-request-bill-detail";

export class PaymentRequest {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @MaxLength(20)
  @IsNotEmpty()
  @IsString()
  customerNo: string;

  @IsNumberString()
  @IsNotEmpty()
  @MaxLength(28)
  virtualAccountNo: string;

  @IsString()
  @IsOptional()
  virtualAccountName: string;

  @IsEmail()
  @IsOptional()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  @IsOptional()
  virtualAccountPhone: string;

  @IsString()
  @MaxLength(64)
  @IsOptional()
  trxId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsString()
  @Length(4)
  @IsOptional()
  channelCode: string;

  @IsString()
  @IsOptional()
  hashedSourceAccountNo: string;

  @IsString()
  @Length(3)
  @IsOptional()
  sourceBankCode: string;

  @IsNotEmptyObject()
  @IsOptional()
  paidAmount: Amount;

  @IsObject()
  @IsOptional()
  cumulativePaymentAmount: Amount;

  @IsHexadecimal()
  @MaxLength(6)
  @IsOptional()
  paidBills: string;

  @IsObject()
  @IsOptional()
  totalAmount: Amount;

  @IsISO8601()
  @IsOptional()
  trxDateTime: string;

  @IsString()
  @MaxLength(64)
  @IsOptional()
  referenceNo: string;

  @IsNumberString()
  @MaxLength(6)
  @IsOptional()
  journalNum: string;

  @IsEnum(PaymentType)
  @Length(1)
  @IsOptional()
  paymentType: PaymentType;

  @IsEnum(FlagAdvise)
  @Length(1)
  @IsOptional()
  flagAdvise: FlagAdvise;

  @IsString()
  @MaxLength(5)
  @IsOptional()
  subCompany: string;

  @IsArray()
  @IsOptional()
  billDetails: PaymentRequestBillDetail[];

  @IsString()
  @IsOptional()
  @MaxLength(15)
  billReferenceNo: string;

  @IsArray()
  @Max(25)
  @IsOptional()
  freeTexts: Description[];

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, unknown>;
}
