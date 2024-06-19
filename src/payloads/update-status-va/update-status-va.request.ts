import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { PaidStatus } from "../../enumerations/paid-status.enum";

export class UpdateStatusVaRequest {
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

  @IsEnum(PaidStatus)
  @Length(1)
  @IsOptional()
  paidStatus: PaidStatus;
}
