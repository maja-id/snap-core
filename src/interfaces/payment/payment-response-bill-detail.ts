import { IsObject, IsString, Length, MaxLength } from "class-validator";
import { Description } from "../description";
import { PaymentFlagStatus } from "../../enumerations/payment-flag-status.enum";
import { BillDetail } from "../bill-detail";

export class PaymentResponseBillDetail extends BillDetail {
  @IsString()
  @MaxLength(64)
  billerReferenceId: string;

  @IsString()
  @Length(2)
  status: PaymentFlagStatus;

  @IsObject()
  reason: Description;
}
