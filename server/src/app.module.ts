import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { CategoriesService } from './categories/categories.service';
import { CategoriesModule } from './categories/categories.module';

import config from './config/config';
import { CategoriesController } from './categories/categories.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [config],
      cache: true,
    }),
    PrismaModule,
    UsersModule,
    GamesModule,
    CategoriesModule,
  ],
  controllers: [AppController, UsersController, CategoriesController],
  providers: [AppService, UsersService, CategoriesService],
})
export class AppModule {}
