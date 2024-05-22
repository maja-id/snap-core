import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class CommonRequest {
  @IsString()
  @IsNotEmpty()
  @Length(8)
  partnerServiceId: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  customerNo: string;

  @IsString()
  @IsNumberString()
  @Length(28)
  virtualAccountNo: string;

  @IsObject()
  additionalInfo: Record<string, any>;
}
