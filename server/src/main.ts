import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE',
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );
  app.setGlobalPrefix('/v1/api');
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
