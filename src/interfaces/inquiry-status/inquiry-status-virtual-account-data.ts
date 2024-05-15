import {
  IsArray,
  IsEnum,
  IsHexadecimal,
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { PaymentFlagReason } from "../payment/payment-flag-reason";
import { Amount } from "../amount";
import { PaymentType } from "../../enumerations/payment-type.enum";
import { FlagAdvise } from "../../enumerations/flag-advise.enum";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";
import { InquiryStatusBillDetail } from "./inquiry-status-bill-detail";
import { Description } from "../description";

export class InquiryStatusVirtualAccountData {
  @IsObject()
  paymentFlagReason: PaymentFlagReason;

  @IsString()
  @Length(8)
  @IsNotEmpty()
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(28)
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsObject()
  paidAmount: Amount;

  @IsHexadecimal()
  @MaxLength(6)
  paidBills: string;

  @IsObject()
  totalAmount: Amount;

  @IsISO8601()
  trxDateTime: string;

  @IsISO8601()
  transactionDate: string;

  @IsString()
  @MaxLength(15)
  referenceNo: string;

  @IsEnum(["1", "2"])
  paymentType: PaymentType;

  @IsEnum(["Y", "N"])
  flagAdvise: FlagAdvise;

  @IsNumberString()
  @Length(2)
  paymentFlagStatus: PaymentFlagStatus;

  @IsArray()
  billDetails: InquiryStatusBillDetail[];

  @IsArray()
  freeTexts: Description[];
}
