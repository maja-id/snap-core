import { CreateVaResponse } from "../create-va/create-va.response";
import { UpdateVaVirtualAccountData } from "./update-va-virtual-account-data";

export class UpdateVaResponse extends CreateVaResponse {
  virtualAccountData: UpdateVaVirtualAccountData;
}
