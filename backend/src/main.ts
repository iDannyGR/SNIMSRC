import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/* eslint-disable */
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(3001, () =>
    console.log(`
  running on port 3001 http://localhost:3001`),
  );
}
bootstrap();
