import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AppDataSource } from './data-source';

import 'reflect-metadata'; // typeorm requirement

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Outside Digital Test Service')
    .setDescription('Test Service')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.enableCors();
  await app.listen(3000);

  AppDataSource.initialize()
    .then(() => {
      // here you can start to work with your database
    })
    .catch(console.log);
}
bootstrap();
