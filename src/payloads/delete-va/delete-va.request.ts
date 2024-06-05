import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class DeleteVaRequest {
  @IsNumberString()
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

  @IsObject()
  @IsOptional()
  additionalInfo: Record<string, any>;
}
