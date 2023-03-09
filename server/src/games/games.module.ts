import { Module } from '@nestjs/common';

import { GamesService } from './games.service';
import { GamesController } from './games.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  providers: [GamesService],
  controllers: [GamesController],
  imports: [PrismaModule],
})
export class GamesModule {}
