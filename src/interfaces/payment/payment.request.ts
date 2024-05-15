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
  @IsNumberString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @Length(20)
  @IsNotEmpty()
  @IsString()
  customerNo: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(28)
  virtualAccountNo: string;

  @IsString()
  virtualAccountName: string;

  @IsEmail()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  virtualAccountPhone: string;

  @IsString()
  @MaxLength(64)
  trxId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsString()
  @Length(4)
  channelCode: string;

  @IsString()
  hashedSourceAccountNo: string;

  @IsString()
  @Length(3)
  sourceBankCode: string;

  @IsNotEmptyObject()
  paidAmount: Amount;

  @IsObject()
  cumulativePaymentAmount: Amount;

  @IsHexadecimal()
  @MaxLength(6)
  paidBills: string;

  @IsObject()
  totalAmount: Amount;

  @IsISO8601()
  trxDateTime: string;

  @IsString()
  @MaxLength(64)
  referenceNo: string;

  @IsNumberString()
  @MaxLength(6)
  journalNum: string;

  @IsEnum(["1", "2"])
  @Length(1)
  paymentType: PaymentType;

  @IsEnum(["Y", "N"])
  @Length(1)
  flagAdvise: FlagAdvise;

  @IsString()
  @MaxLength(5)
  subCompany: string;

  @IsArray()
  billDetails: PaymentRequestBillDetail[];

  @IsString()
  @MaxLength(15)
  billReferenceNo: string;

  @IsArray()
  @Max(25)
  freeTexts: Description[];

  @IsObject()
  additionalInfo: Record<string, unknown>;
}
