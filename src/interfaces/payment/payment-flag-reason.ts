import { IsString, MaxLength } from "class-validator";

export class PaymentFlagReason {
  @IsString()
  @MaxLength(200)
  indonesia: string;

  @IsString()
  @MaxLength(200)
  english: string;
}
