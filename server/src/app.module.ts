import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { AudioModule } from './audio/audio.module';
import { AppGateway } from './app.gateway';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.7btj4.mongodb.net/messenger-2?retryWrites=true&w=majority',
    ),
    UserModule,
    ChatModule,
    MessageModule,
    AudioModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
