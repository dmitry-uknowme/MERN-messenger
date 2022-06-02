import { DynamicModule } from '@nestjs/common';
import {
  RedisModule as RedisModuleLib,
  RedisModuleOptions,
} from 'nestjs-redis';
import { ConfigModule } from './config.module';
import { ConfigService } from './config.service';

export const RedisModule: DynamicModule = RedisModuleLib.forRootAsync({
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: (config: ConfigService): RedisModuleOptions => {
    return {
      host: config.REDIS_HOST,
      port: config.REDIS_PORT,
    };
  },
});
