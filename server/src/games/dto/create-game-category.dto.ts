import { IsString } from 'class-validator';

class CreateGameCategoryDto {
  @IsString()
  name: string;
}

export default CreateGameCategoryDto;
