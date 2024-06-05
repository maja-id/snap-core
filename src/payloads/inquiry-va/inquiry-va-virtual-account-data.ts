import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { VirtualAccountData } from "../virtual-account-data";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";
import { Amount } from "../amount";

export class InquiryVaVirtualAccountData extends VirtualAccountData {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64) // Kadang ada yg 64 kadang ada yang 32, gak konsisten
  trxId: string;

  @IsEnum(VirtualAccountTrxType)
  @IsOptional()
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  @IsOptional()
  feeAmount: Amount;

  @IsISO8601()
  @IsOptional()
  expiredDate: string;

  @IsISO8601()
  @IsOptional()
  lastUpdateDate: string;

  @IsISO8601()
  @IsOptional()
  paymentDate: string;

  @IsOptional()
  @IsObject()
  additionalInfo: Record<string, any>;
}
