import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class InquiryStatusRequest {
  @IsString()
  @Length(8)
  @IsNotEmpty()
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsNumberString()
  @IsNotEmpty()
  @Length(28)
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsString()
  @MaxLength(128)
  paymentRequestId: string;

  @IsObject()
  additionalInfo: Record<string, any>;
}
