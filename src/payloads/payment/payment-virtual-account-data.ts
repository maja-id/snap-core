import {
  IsArray,
  IsEmail,
  IsEnum,
  IsHexadecimal,
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Amount } from "../amount";
import { Description } from "../description";
import { PaymentFlagReason } from "./payment-flag-reason";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";
import { PaymentType } from "../../enumerations/payment-type.enum";
import { FlagAdvise } from "../../enumerations/flag-advise.enum";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";
import { PaymentResponseBillDetail } from "./payment-response-bill-detail";
import { VirtualAccountData } from "../virtual-account-data";

export class paymentVirtualAccountData extends VirtualAccountData {
  @IsObject()
  paymentFlagReason: PaymentFlagReason;

  @IsString()
  @MaxLength(32)
  trxId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsObject()
  paidAmount: Amount;

  @IsHexadecimal()
  @MaxLength(6)
  paidBills: string;

  @IsISO8601()
  trxDatetime: string;

  @IsString()
  @MaxLength(15)
  referenceNo: string;

  @IsNumberString()
  @MaxLength(6)
  journalNum: string;

  @Length(1)
  @IsEnum(PaymentType)
  paymentType: PaymentType;

  @IsEnum(FlagAdvise)
  @Length(1)
  flagAdvise: FlagAdvise;

  @IsNumberString()
  @Length(2)
  paymentFlagStatus: PaymentFlagStatus;

  @IsArray()
  billDetails: PaymentResponseBillDetail[];
}
