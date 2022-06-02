import * as ConnectRedis from 'connect-redis';
import * as session from 'express-session';
import { RedisService } from 'nestjs-redis';
import { NestSessionOptions, SessionModule } from 'nestjs-session';
// import { NestSessionOptions, SessionModule } from '../../../dist';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';
import { RedisModule } from './redis.module';
import Redis from 'ioredis';

const RedisStore = ConnectRedis(session);

export const Session = SessionModule.forRootAsync({
  imports: [RedisModule, ConfigModule],
  inject: [RedisService, ConfigService],
  useFactory: (
    redisService: RedisService,
    config: ConfigService,
  ): NestSessionOptions => {
    // const redisClient = redisService.getClient();
    const redisClient = new Redis();
    const store = new RedisStore({ client: redisClient as any });
    return {
      session: {
        store,
        secret: config.SESSION_SECRET,
        cookie: {
          sameSite: true,
          httpOnly: true,
          maxAge: 500000,
        },
      },
    };
  },
});
