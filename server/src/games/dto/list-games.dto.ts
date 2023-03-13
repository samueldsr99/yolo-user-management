import { Type } from 'class-transformer';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

class ListGamesDto {
  @Type(() => Number)
  @IsOptional()
  @IsNumber()
  categoryId?: number;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  startDate?: Date;

  @Type(() => Date)
  @IsOptional()
  @IsDate()
  endDate?: Date;
}

export default ListGamesDto;
