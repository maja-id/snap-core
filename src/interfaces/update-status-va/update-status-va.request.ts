import {
  IsEnum,
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { PaidStatus } from "../../enumerations/paid-status.enum";

export class UpdateStatusVaRequest {
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

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  trxId: string;

  @IsEnum(PaidStatus)
  @Length(1)
  paidStatus: PaidStatus;
}
