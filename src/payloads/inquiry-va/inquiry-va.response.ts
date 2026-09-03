import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { InquiryVaVirtualAccountData } from "./inquiry-va-virtual-account-data";

export class InquiryVaResponse {
  @IsNumberString()
  @IsNotEmpty()
  @Length(7)
  responseCode: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  responseMessage: string;

  @IsObject()
  virtualAccountData: InquiryVaVirtualAccountData;

  @IsOptional()
  @IsObject()
  additionalInfo: Record<string, any>;
}
