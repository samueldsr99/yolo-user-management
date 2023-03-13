import { Type } from 'class-transformer';
import { IsOptional, IsString, ValidateNested } from 'class-validator';

import CreateGameCategoryDto from './create-game-category.dto';

class CreateGameDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ValidateNested()
  @Type(() => CreateGameCategoryDto)
  category: CreateGameCategoryDto;
}

export default CreateGameDto;
