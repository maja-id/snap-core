import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { InquiryReason } from "./inquiry-reason";
import { Amount } from "../amount";
import { Description } from "../description";
import { InquiryBillDetail } from "./inquiry-bill-detail";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";

export class InquiryVirtualAccountData {
  @IsNumberString()
  @Length(2)
  inquiryStatus: string;

  @IsObject()
  inquiryReason: InquiryReason;

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

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsObject()
  totalAmount: Amount;

  @MaxLength(5)
  @IsString()
  subCompany: string;

  @IsArray()
  billDetails: InquiryBillDetail[];

  @IsArray()
  freeTexts: Description[];

  @IsEnum(["c", "o", "i", "m", "l", "n", "x", "v", "w"])
  @Length(1)
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  feeAmount: Amount;
}
