import { IsOptional, IsString, MaxLength } from "class-validator";

export class PaymentFlagReason {
  @IsString()
  @MaxLength(200)
  @IsOptional()
  indonesia: string;

  @IsString()
  @MaxLength(200)
  @IsOptional()
  english: string;
}
