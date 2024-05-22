import {
  IsArray,
  IsEmail,
  IsEnum,
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
  @Length(28)
  @IsNotEmpty()
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  virtualAccountName: string;

  @IsEmail()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  virtualAccountPhone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  trxId: string;

  @IsObject()
  totalAmount: Amount;

  @IsArray()
  billDetails: BillDetail[];

  freeTexts: Description[];

  @IsEnum(VirtualAccountTrxType)
  virtualAccountTrxType: VirtualAccountTrxType;

  feeAmount: Amount;

  @IsISO8601()
  expiredDate: string;

  @IsObject()
  additionalInfo: Record<string, any>;
}
