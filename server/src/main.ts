import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './middleware/socket-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  app.enableCors({ origin: ['https://etpp.ru'], credentials: true });
  // app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  // app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  await app.listen(9000);
}
bootstrap();
