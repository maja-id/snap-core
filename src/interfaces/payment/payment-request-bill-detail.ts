import {
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "../description";
import { Amount } from "../amount";
import { InquiryBillDetail } from "../inquiry/inquiry-bill-detail";

export class PaymentRequestBillDetail extends InquiryBillDetail {
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
  additionalInfo: Record<string, any>;

  @IsString()
  @MaxLength(15)
  billReferenceNo: string;
}
