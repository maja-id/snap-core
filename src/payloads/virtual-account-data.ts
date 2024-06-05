import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "./description";
import { Amount } from "./amount";

export class VirtualAccountData {
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
  @MaxLength(28)
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

  @IsObject()
  @IsOptional()
  totalAmount: Amount;

  @IsArray()
  @IsOptional()
  freeTexts: Description[];
}
