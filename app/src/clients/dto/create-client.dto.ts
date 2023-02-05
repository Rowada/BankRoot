import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateClientDto {
  @IsString()
  lastname: string;

  @IsString()
  firstname: string;

  @IsEmail()
  email_address: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
