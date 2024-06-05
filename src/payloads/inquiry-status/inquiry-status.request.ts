import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
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
  @MaxLength(28)
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  inquiryRequestId: string;

  @IsString()
  @MaxLength(128)
  @IsOptional()
  paymentRequestId: string;

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
