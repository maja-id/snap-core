import { IsDecimal, IsNotEmpty, IsString, Length } from "class-validator";

export class Amount {
  @IsString()
  @Length(3)
  @IsNotEmpty()
  currency: string;

  @IsDecimal({ decimal_digits: "2" })
  @IsNotEmpty()
  value: number;
}
