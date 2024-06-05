import { IsISO8601, IsOptional } from "class-validator";
import { CreateVaVirtualAccountData } from "../create-va/create-va-virtual-account-data";

export class UpdateVaVirtualAccountData extends CreateVaVirtualAccountData {
  @IsISO8601()
  @IsOptional()
  lastUpdateDate: string;

  @IsISO8601()
  @IsOptional()
  paymentDate: string;
}
