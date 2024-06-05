import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { InquiryStatusVirtualAccountData } from "./inquiry-status-virtual-account-data";

export class InquiryStatusResponse {
  @IsNumberString()
  @Length(7)
  @IsNotEmpty()
  responseCode: string;

  @IsString()
  @MaxLength(150)
  @IsNotEmpty()
  responseMessage: string;

  @IsObject()
  virtualAccountData: InquiryStatusVirtualAccountData;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
