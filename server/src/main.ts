import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './middleware/socket-io.adapter';
import * as session from 'express-session';
import connectRedis from 'connect-redis';
import { ValidationPipe } from '@nestjs/common';
import { redis } from './Redis';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  };
  const RedisStore = connectRedis(session);
  app.useWebSocketAdapter(new SocketIoAdapter(app, true));
  app.enableCors(options);
  app.useGlobalPipes(new ValidationPipe({ stopAtFirstError: true }));
  app.use(
    session({
      store: new RedisStore({ client: redis }),
      cookie: {
        maxAge: 60000 * 60 * 24,
      },
      secret: 'mysecret',
      saveUninitialized: false,
      resave: false,
    }),
  );

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
