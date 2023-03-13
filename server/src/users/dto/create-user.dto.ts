import { IsEmail, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
