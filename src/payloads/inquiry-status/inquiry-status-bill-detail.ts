import { IsObject, IsString, Length, MaxLength } from "class-validator";
import { Description } from "../description";
import { Amount } from "../amount";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";

export class InquiryStatusBillDetail {
  @IsString()
  @MaxLength(15)
  billReferenceNo: string;

  @IsString()
  @Length(2)
  billCode: string;

  @IsString()
  @MaxLength(18)
  billNo: string;

  @IsString()
  @MaxLength(20)
  billName: string;

  @IsString()
  @MaxLength(10)
  billShortName: string;

  @IsObject()
  billDescription: Description;

  @IsString()
  @MaxLength(5)
  billSubCompany: string;

  @IsObject()
  billAmount: Amount;

  @IsObject()
  additionalInfo: Record<string, any>;

  @IsString()
  @Length(2)
  status: PaymentFlagStatus;

  @IsObject()
  reason: Description;
}
