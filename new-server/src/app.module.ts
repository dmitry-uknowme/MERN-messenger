import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { ChatModule } from './chat/chat.module';
import { MessageModule } from './message/message.module';
import { AppGateway } from './app.gateway';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.7btj4.mongodb.net/messenger-2?retryWrites=true&w=majority',
      // 'mongodb+srv://dmitry-admin:LsfBQHca9TJdigf6@cluster0.hrixg.mongodb.net/messenger?retryWrites=true&w=majority',
    ),
    UserModule,
    ChatModule,
    MessageModule,
  ],
  providers: [AppGateway],
})
export class AppModule {}
