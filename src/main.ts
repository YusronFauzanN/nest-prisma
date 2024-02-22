import { NestFactory } from '@nestjs/core';
import { AppModule } from './libs/modules/main';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  await app.listen(3000);
  Logger.log(
    `🚀 Application is running on: http://localhost:3000/${globalPrefix}`,
  );
}
bootstrap();
