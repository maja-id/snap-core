import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { InquiryVirtualAccountData } from "./inquiry-virtual-account-data";

export class InquiryResponse {
  @IsNumberString()
  @IsNotEmpty()
  @Length(7)
  responseCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  responseMessage: string;

  @IsObject()
  virtualAccountData: InquiryVirtualAccountData;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
