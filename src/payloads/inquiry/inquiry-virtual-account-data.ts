import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { InquiryReason } from "./inquiry-reason";
import { Amount } from "../amount";
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
  @IsOptional()
  subCompany: string;

  @IsArray()
  @IsOptional()
  billDetails: InquiryBillDetail[];

  @IsEnum(VirtualAccountTrxType)
  @Length(1)
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  @IsOptional()
  feeAmount: Amount;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
