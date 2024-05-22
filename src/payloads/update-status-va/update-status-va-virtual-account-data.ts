import {
  IsEnum,
  IsISO8601,
  IsNotEmpty,
  IsObject,
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
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsObject()
  feeAmount: Amount;

  @IsISO8601()
  expiredDate: string;

  @IsISO8601()
  lastUpdateDate: string;

  @IsISO8601()
  paymentDate: string;

  @IsObject()
  additionalInfo: Record<string, any>;
}
