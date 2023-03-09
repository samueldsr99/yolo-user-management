import {
  Controller,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { GamesService } from './games.service';
import { notFoundGameMessage } from './responses';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get('/:id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const game = await this.gamesService.findOne(id);
    if (!game) {
      throw new NotFoundException(notFoundGameMessage(id));
    }
    return game;
  }

  @Get()
  async findMany() {
    const games = await this.gamesService.findMany();
    return games;
  }
}
