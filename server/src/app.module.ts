import { Inject, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SessionModule } from 'nestjs-session';
import { UserModule } from './user/user.module';
import Redis from 'ioredis';
// import { ChatModule } from './chat/chat.module';
// import { MessageModule } from './message/message.module';
// import { AudioModule } from './audio/audio.module';
// import { PostModule } from './post/post.module';
import { AppGateway } from './app.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './modules/database/database.module';
import session from 'express-session';
import * as connectRedis from 'connect-redis';

const RedisStore = connectRedis(session);

export const redis = new Redis(6379, 'localhost');
@Module({
  imports: [
    ConfigModule.forRoot({}),
    // SessionModule.forRoot({
    //   session: { secret: 'secret', store: new RedisStore({ client: redis }) },
    // }),
    // ServeStaticModule.forRoot({
    //   rootPath: path.join(__dirname, '..', 'static'),
    //   // rootPath: path.resolve(__dirname, 'static'),
    // }),
    // DatabaseModule
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT as unknown as number,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      migrations: ['dist/migrations/*{.ts,.js}'],
      migrationsTableName: 'migrations_typeorm',
      migrationsRun: true,
      autoLoadEntities: true,
    }),
    UserModule,
    // AuthModule,
    // ChatModule,
    // MessageModule,
    // AudioModule,
    // PostModule,
  ],
  providers: [AppGateway],
})
export class AppModule {
  // constructor(@Inject(REDIS) private readonly redis: RedisClient) {}
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(
  //       session({
  //         store: new (RedisStore(session))({
  //           client: this.redis,
  //           logErrors: true,
  //         }),
  //         saveUninitialized: false,
  //         secret: 'sup3rs3cr3t',
  //         resave: false,
  //         cookie: {
  //           sameSite: true,
  //           httpOnly: false,
  //           maxAge: 60000,
  //         },
  //       }),
  //     )
  //     .forRoutes('*');
  // }
}
