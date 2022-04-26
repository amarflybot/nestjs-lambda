import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Express } from 'express';
import { INestApplication } from '@nestjs/common';
import { ExpressAdapter } from '@nestjs/platform-express';

export async function createApp(
  expressApp: Express,
): Promise<INestApplication> {
  return await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
}
