import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class CreateVaRequest {
  @IsNumberString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsNumberString()
  @Length(28)
  @IsNotEmpty()
  virtualAccountNo: string;
}
