import {
  IsArray,
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { VirtualAccountData } from "../virtual-account-data";
import { BillDetail } from "../bill-detail";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";
import { Amount } from "../amount";

export class CreateVaVirtualAccountData extends VirtualAccountData {
  @IsString()
  @IsNotEmpty()
  @MaxLength(32)
  trxId: string;

  @IsArray()
  @IsOptional()
  billDetails: BillDetail[];

  @IsEnum(VirtualAccountTrxType)
  @IsNotEmpty()
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  @IsOptional()
  feeAmount: Amount;

  @IsISO8601()
  @IsOptional()
  expiredDate: string;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
