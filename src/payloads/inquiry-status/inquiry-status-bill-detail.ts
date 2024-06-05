import {
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "../description";
import { Amount } from "../amount";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";

export class InquiryStatusBillDetail {
  @IsString()
  @MaxLength(15)
  @IsOptional()
  billReferenceNo: string;

  @IsString()
  @Length(2)
  @IsOptional()
  billCode: string;

  @IsString()
  @MaxLength(18)
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

  @IsString()
  @MaxLength(5)
  @IsOptional()
  billSubCompany: string;

  @IsObject()
  billAmount: Amount;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;

  @IsString()
  @Length(2)
  @IsOptional()
  status: PaymentFlagStatus;

  @IsObject()
  @IsOptional()
  reason: Description;
}
