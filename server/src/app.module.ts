import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';

import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      cache: true,
    }),
    PrismaModule,
    UsersModule,
    GamesModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
