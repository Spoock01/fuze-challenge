/* eslint-disable import/prefer-default-export */
import { IsNotEmpty, IsString, Length } from 'class-validator';
import { Trim } from 'class-sanitizer';

export class CardValidator {
  @IsString()
  @Trim()
  @Length(1, 40)
  @IsNotEmpty()
  public name: string;

  @IsString()
  @Trim()
  @Length(16, 16)
  @IsNotEmpty()
  public cardNumber: string;

  @IsString()
  @Trim()
  @IsNotEmpty()
  public expirationDate: string;

  @IsString()
  @Trim()
  @IsNotEmpty()
  @Length(3, 3)
  public cvc: string;
}
