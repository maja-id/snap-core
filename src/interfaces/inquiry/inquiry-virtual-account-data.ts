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
import { VirtualAccountData } from "../virtual-account-data";

export class InquiryVirtualAccountData extends VirtualAccountData {
  @IsNumberString()
  @Length(2)
  inquiryStatus: string;

  @IsObject()
  inquiryReason: InquiryReason;

  @IsNotEmpty()
  @IsString()
  @MaxLength(128)
  inquiryRequestId: string;

  @MaxLength(5)
  @IsString()
  subCompany: string;

  @IsArray()
  billDetails: InquiryBillDetail[];

  @IsEnum(["c", "o", "i", "m", "l", "n", "x", "v", "w"])
  @Length(1)
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  feeAmount: Amount;
}
