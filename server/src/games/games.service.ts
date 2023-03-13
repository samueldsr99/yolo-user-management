import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import CreateGameDto from './dto/create-game.dto';
import ListGamesDto from './dto/list-games.dto';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(game: CreateGameDto) {
    return this.prisma.game.create({
      data: {
        name: game.name,
        description: game.description,
        imageUrl: game.imageUrl,
        category: {
          create: game.category,
        },
      },
      include: { category: true },
    });
  }

  async findMany({ startDate, endDate, categoryId }: ListGamesDto = {}) {
    return this.prisma.game.findMany({
      where: {
        ...(categoryId && { categoryId }),
        createdAt: {
          ...(startDate && { gte: startDate }),
          ...(endDate && { lte: endDate }),
        },
      },
      include: { category: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.game.findUnique({ where: { id } });
  }

  async deleteOne(id: number) {
    try {
      const deletedGame = await this.prisma.game.delete({ where: { id } });
      return deletedGame;
    } catch (err) {
      return null;
    }
  }
}
