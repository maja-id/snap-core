import {
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsString,
  Length,
  MaxLength,
} from "class-validator";
import { DeleteVaRequest } from "./delete-va.request";

export class DeleteVaResponse {
  @IsNumberString()
  @IsNotEmpty()
  @Length(7)
  responseCode: string;
  @IsString()
  @IsNotEmpty()
  @MaxLength(150)
  responseMessage: string;
  @IsObject()
  virtualAccountData: DeleteVaRequest;
}
