import {
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { Description } from "../description";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";
import { BillDetail } from "../bill-detail";

export class PaymentResponseBillDetail extends BillDetail {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  billerReferenceId: string;

  @IsString()
  @Length(2)
  @IsOptional()
  status: PaymentFlagStatus;

  @IsObject()
  @IsOptional()
  reason: Description;
}
