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

export class paymentVirtualAccountData {
  @IsObject()
  paymentFlagReason: PaymentFlagReason;

  @IsNotEmpty()
  @IsNumberString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  customerNo: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(28)
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  virtualAccountName: string;

  @IsEmail()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  virtualAccountPhone: string;

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

  @IsObject()
  totalAmount: Amount;

  @IsISO8601()
  trxDatetime: string;

  @IsString()
  @MaxLength(15)
  referenceNo: string;

  @IsNumberString()
  @MaxLength(6)
  journalNum: string;

  @Length(1)
  @IsEnum(["1", "2"])
  paymentType: PaymentType;

  @IsEnum(["Y", "N"])
  @Length(1)
  flagAdvise: FlagAdvise;

  @IsNumberString()
  @Length(2)
  paymentFlagStatus: PaymentFlagStatus;

  @IsArray()
  billDetails: PaymentResponseBillDetail[];

  @IsArray()
  freeTexts: Description[];
}
