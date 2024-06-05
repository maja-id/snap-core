import { IsOptional, IsString } from "class-validator";

export class Description {
  @IsString()
  @IsOptional()
  english: string;
  @IsString()
  @IsOptional()
  indonesia: string;
}
