import {
  IsArray,
  IsEmail,
  IsEnum,
  IsHexadecimal,
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
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
  @IsOptional()
  paymentFlagReason: PaymentFlagReason;

  @IsString()
  @MaxLength(32)
  @IsOptional()
  trxId: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsObject()
  @IsOptional()
  paidAmount: Amount;

  @IsHexadecimal()
  @MaxLength(6)
  @IsOptional()
  paidBills: string;

  @IsISO8601()
  @IsOptional()
  trxDatetime: string;

  @IsString()
  @MaxLength(15)
  @IsOptional()
  referenceNo: string;

  @IsNumberString()
  @MaxLength(6)
  @IsOptional()
  journalNum: string;

  @Length(1)
  @IsEnum(PaymentType)
  @IsOptional()
  paymentType: PaymentType;

  @IsEnum(FlagAdvise)
  @Length(1)
  @IsOptional()
  flagAdvise: FlagAdvise;

  @IsEnum(PaymentFlagStatus)
  @Length(2)
  @IsOptional()
  paymentFlagStatus: PaymentFlagStatus;

  @IsArray()
  @IsOptional()
  billDetails: PaymentResponseBillDetail[];
}
