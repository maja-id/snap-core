import {
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { paymentVirtualAccountData } from "./payment-virtual-account-data";

export class PaymentResponse {
  @IsNumberString()
  @Length(7)
  responseCode: string;

  @IsString()
  @MaxLength(150)
  responseMessage: string;

  @IsObject()
  virtualAccountData: paymentVirtualAccountData;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
