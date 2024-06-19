import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class InquiryVaRequest {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsNumberString()
  @MaxLength(28)
  @IsNotEmpty()
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  trxId: string;
}
