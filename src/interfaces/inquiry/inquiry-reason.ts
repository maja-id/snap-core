import { IsString, MaxLength } from "class-validator";

export class InquiryReason {
  @IsString()
  @MaxLength(64)
  english: string;

  @IsString()
  @MaxLength(64)
  indonesia: string;
}
