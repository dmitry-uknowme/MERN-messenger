import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './middleware/socket-io.adapter';
import * as session from 'express-session';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  // app.use(
  //   session({
  //     secret: 'my-secret',
  //     resave: false,
  //     saveUninitialized: false,
  //   }),
  // );
  await app.listen(9000);
}
bootstrap();
