import {
  IsISO8601,
  IsNotEmpty,
  IsNumberString,
  IsObject,
  IsString,
  Length,
} from "class-validator";

export class TokenResponse {
  @IsNumberString()
  @IsNotEmpty()
  @Length(7)
  responseCode: string;
  @IsString()
  responseMessage: string;
  @IsString()
  accessToken: string;
  @IsString()
  tokenType: string;
  @IsISO8601()
  accessTokenExpiryTime: string;
  @IsString()
  refreshToken: string;
  @IsISO8601()
  refreshTokenExpiryTime: string;
  @IsObject()
  additionalInfo: Record<string, any>;
}
