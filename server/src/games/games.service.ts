import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async findMany() {
    return this.prisma.game.findMany({
      include: { category: true },
    });
  }

  async findOne(id: number) {
    return this.prisma.game.findUnique({ where: { id } });
  }
}
