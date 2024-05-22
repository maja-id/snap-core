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
import { VirtualAccountData } from "../virtual-account-data";

export class InquiryStatusVirtualAccountData extends VirtualAccountData {
  @IsObject()
  paymentFlagReason: PaymentFlagReason;

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
}
