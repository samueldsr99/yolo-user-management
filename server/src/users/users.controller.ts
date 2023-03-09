import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { notFoundUserMessage } from './responses';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/:id')
  async findOne(@Param('id', new ParseIntPipe()) id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException(notFoundUserMessage(id));
    }
    return user;
  }

  @Get()
  async findMany() {
    const users = await this.usersService.findMany();
    return users;
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete('/:id')
  async delete(@Param('id', new ParseIntPipe()) id: number) {
    const user = await this.usersService.delete(id);
    if (!user) {
      throw new NotFoundException(notFoundUserMessage(id));
    }
    return user;
  }
}
