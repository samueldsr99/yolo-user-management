import { IsEmail, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { CreateAddressDto } from './create-address.dto';

export class CreateUserDto {
  @IsEmail()
  email: string;

  name: string;

  @ValidateNested()
  @Type(() => CreateAddressDto)
  address: CreateAddressDto;
}
