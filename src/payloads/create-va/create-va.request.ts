import {
  IsArray,
  IsEmail,
  IsEnum,
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
import { BillDetail } from "../bill-detail";
import { Description } from "../description";
import { VirtualAccountTrxType } from "../../enumerations/virtual-account-trx-type.enum";

export class CreateVaRequest {
  @IsNumberString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsNumberString()
  @MaxLength(28)
  @IsNotEmpty()
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  virtualAccountName: string;

  @IsEmail()
  @IsOptional()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  @IsOptional()
  virtualAccountPhone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  trxId: string;

  @IsObject()
  @IsOptional()
  totalAmount: Amount;

  @IsArray()
  billDetails: BillDetail[];

  @IsOptional()
  @IsArray()
  freeTexts: Description[];

  @IsEnum(VirtualAccountTrxType)
  @IsOptional()
  virtualAccountTrxType: VirtualAccountTrxType;

  @IsOptional()
  feeAmount: Amount;

  @IsISO8601()
  @IsOptional()
  expiredDate: string;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
