import {
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "./description";
import { Amount } from "./amount";

export class BillDetail {
  @IsNumberString()
  @Length(2)
  @IsOptional()
  billCode: string;

  @MaxLength(18)
  @IsString()
  @IsOptional()
  billNo: string;

  @IsString()
  @MaxLength(20)
  @IsOptional()
  billName: string;

  @IsString()
  @MaxLength(10)
  @IsOptional()
  billShortName: string;

  @IsObject()
  @IsOptional()
  billDescription: Description;

  @IsNumberString()
  @IsOptional()
  billSubCompany: string;

  @IsObject()
  billAmount: Amount;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
