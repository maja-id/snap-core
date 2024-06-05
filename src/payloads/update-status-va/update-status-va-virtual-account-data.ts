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
import { Amount } from "../amount";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";

export class UpdateStatusVaVirtualAccountData extends VirtualAccountData {
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
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

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
