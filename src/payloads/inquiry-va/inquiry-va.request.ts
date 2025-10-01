import {
  IsNotEmpty,
  IsString,
  Length,
  Matches,
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

  @MaxLength(28)
  @Matches(/^[\d ]+$/)
  @IsNotEmpty()
  virtualAccountNo: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  trxId: string;
}
