import {
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "./description";
import { Amount } from "./amount";

export class BillDetail {
  @IsNumberString()
  @Length(2)
  billCode: string;

  @MaxLength(18)
  @IsString()
  billNo: string;

  @IsString()
  @MaxLength(20)
  billName: string;

  @IsString()
  @MaxLength(10)
  billShortName: string;

  @IsObject()
  billDescription: Description;

  @IsNumberString()
  billSubCompany: string;

  @IsObject()
  billAmount: Amount;

  @IsObject()
  additionalInfo: Record<string, any>;
}
