/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  configureSwagger(app);

  const port = process.env.PORT || 3333;

  await app.listen(port);
}

function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('Aletheia API')
    .setDescription('API Restful ')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
}

bootstrap();
