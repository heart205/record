import { NestFactory } from '@nestjs/core';
import { readEnvFile } from 'src/utils/readEnvFile';
import { AppModule } from './app.module';
interface env {
  PORT?: string;
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const env: env = readEnvFile(
    process.cwd() + `/.${process.env.NODE_ENV || 'development'}.env`,
  );
  await app.listen(env.PORT || 3664);
}
bootstrap();
