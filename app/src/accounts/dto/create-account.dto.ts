import { IsNotEmpty, IsNumber, IsDate } from 'class-validator';
import { ApiProperty } from "@nestjs/swagger";
export class CreateAccountDto {
  @ApiProperty()
  @IsNumber()
  id_client: number;

  @ApiProperty()
  @IsNumber()
  id_account: number;



  @ApiProperty()
  @IsNumber()
  admin_id: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  account_number: number;


  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  created_at: Date;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  updated_at: Date;
}
