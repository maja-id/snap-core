import { IsISO8601 } from "class-validator";
import { CreateVaVirtualAccountData } from "../create-va/create-va-virtual-account-data";

export class UpdateVaVirtualAccountData extends CreateVaVirtualAccountData {
  @IsISO8601()
  lastUpdateDate: string;

  @IsISO8601()
  paymentDate: string;
}
