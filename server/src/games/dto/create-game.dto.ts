import { IsNumber, IsOptional, IsString } from 'class-validator';

class CreateGameDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsNumber()
  categoryId: number;
}

export default CreateGameDto;
