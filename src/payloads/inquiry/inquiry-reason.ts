import { IsOptional, IsString, MaxLength } from "class-validator";

export class InquiryReason {
  @IsString()
  @MaxLength(64)
  @IsOptional()
  english: string;

  @IsString()
  @MaxLength(64)
  @IsOptional()
  indonesia: string;
}
