import { IsString, MaxLength } from "class-validator";
import { BillDetail } from "../bill-detail";

export class PaymentRequestBillDetail extends BillDetail {
  @IsString()
  @MaxLength(15)
  billReferenceNo: string;
}
