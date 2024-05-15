import { IsString } from "class-validator";

export class Description {
  @IsString()
  english: string;
  @IsString()
  indonesia: string;
}
