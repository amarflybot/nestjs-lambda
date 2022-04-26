import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import { INestApplication } from '@nestjs/common';
import { Express } from 'express';

export async function createApp(
  expressApp: Express,
): Promise<INestApplication> {
  return await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
}

/*async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();*/
