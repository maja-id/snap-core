import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsObject,
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
  @Length(28)
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  virtualAccountName: string;

  @IsEmail()
  virtualAccountEmail: string;

  @IsPhoneNumber()
  virtualAccountPhone: string;

  @IsObject()
  totalAmount: Amount;

  @IsArray()
  freeTexts: Description[];
}
