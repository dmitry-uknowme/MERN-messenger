import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './middleware/socket-io.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: true,
    optionsSuccessStatus: 204,
    credentials: true,
  };
  app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  app.enableCors(options);
  await app.listen(9000);
}
bootstrap();
