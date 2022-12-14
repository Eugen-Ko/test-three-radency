import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const { PORT = 3000} = process.env;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
}
bootstrap();
