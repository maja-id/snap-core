import { IsString } from "class-validator";
import { BillDetail } from "../bill-detail";

export class InquiryBillDetail extends BillDetail {
  @IsString()
  billAmountLabel: string;

  @IsString()
  billAmountValue: string;
}
