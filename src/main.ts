import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from 'process';

async function bootstrap() {
  const PORT = env["PORT"];
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => {
    console.log(`Server started on PORT = ${PORT}`);
  });
}
bootstrap();
