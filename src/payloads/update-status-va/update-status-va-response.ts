import {
  IsNotEmpty,
  IsNumberString,
  IsString,
  Length,
  MaxLength,
} from "class-validator";

export class UpdateStatusVaResponse {
  @IsNumberString()
  @Length(7)
  @IsNotEmpty()
  responseCode: string;

  @IsNotEmpty()
  @IsString()
  @MaxLength(150)
  responseMessage: string;
}
