import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateAccountDto {
  @IsNumber()
  id_client: number;
  @IsNumber()
  account_id: number;

  @IsNumber()
  admin_id: number;
}
