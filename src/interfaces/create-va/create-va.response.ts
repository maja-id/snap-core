import { CreateVaVirtualAccountData } from "./create-va-virtual-account-data";

export class CreateVaResponse {
  responseCode: string;
  responseMessage: string;
  virtualAccountData: CreateVaVirtualAccountData;
}
