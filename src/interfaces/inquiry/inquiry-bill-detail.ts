import {
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "../description";
import { Amount } from "../amount";

export class InquiryBillDetail {
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

  @IsString()
  billAmountLabel: string;

  @IsString()
  billAmountValue: string;

  @IsObject()
  additionalInfo: Record<string, unknown>;
}
