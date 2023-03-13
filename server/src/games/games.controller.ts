import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';

import { GamesService } from './games.service';
import { notFoundGameMessage } from './responses';
import ListGamesDto from './dto/list-games.dto';
import CreateGameDto from './dto/create-game.dto';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async create(@Body() data: CreateGameDto) {
    const game = await this.gamesService.create(data);
    return game;
  }

  @Get(':id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const game = await this.gamesService.findOne(id);
    if (!game) {
      throw new NotFoundException(notFoundGameMessage(id));
    }
    return game;
  }

  @Get()
  async findMany(@Query() query: ListGamesDto) {
    const games = await this.gamesService.findMany(query);
    return games;
  }

  @Delete(':id')
  async deleteOne(@Param('id', new ParseIntPipe()) id: number) {
    const game = await this.gamesService.deleteOne(id);
    if (!game) {
      throw new NotFoundException(notFoundGameMessage(id));
    }
    return game;
  }
}
