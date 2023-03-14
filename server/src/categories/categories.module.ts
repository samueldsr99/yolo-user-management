import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [PrismaModule],
})
export class CategoriesModule {}
