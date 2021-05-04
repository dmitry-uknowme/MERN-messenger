import { Logger } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { Message } from './message/message.schema';

@WebSocketGateway()
export class AppGateway {
  private logger: Logger = new Logger('ChatGateway');
  @WebSocketServer()
  server: Server;

  @SubscribeMessage('MESSAGE:SEND')
  async onMessageSend(@MessageBody() data: Message): Promise<any> {
    this.logger.warn('dat', JSON.stringify(data));
    this.server.emit('MESSAGE:SENT', data);
  }
}

// const onlineUsers: Object = {};

// io.on('connection', (socket: Socket) => {
// 	socket.on('USER:JOIN', (data) => {
// 		// @ts-expect-error
// 		onlineUsers[socket.id] = data.userId;
// 		console.log('online users', onlineUsers);
// 	});

// 	socket.on('MESSAGE:SEND', (data: any) => {
// 		socket.broadcast.emit('MESSAGE:SENT', data);
// 		const { userId, chatId, message } = data;
// 		userTable.findOne({ id: userId }, async (err: any, user: any) => {
// 			const chats = user.chats;
// 			for (const chat of chats) {
// 				if (chat.id === chatId) {
// 					chat.messages.push(message);
// 					user.markModified('chats');
// 					user.save((err: any) => {
// 						if (err) throw Error;
// 						console.log(`message ${message} was send to user id ${chatId}`);
// 					});
// 				}
// 			}
// 		});
// 		userTable.findOne({ id: chatId }, async (err: any, user: any) => {
// 			const chats = user.chats;
// 			for (const chat of chats) {
// 				if (chat.id === userId) {
// 					console.log(
// 						'messssss', message
// 					)
// 					chat.messages.push(message);
// 					user.markModified('chats');
// 					user.save((err: any) => {
// 						if (err) throw Error;
// 						console.log(`message ${message} was send to user id ${userId}`);
// 					});
// 				}
// 			}
// 		});
// 	});

// 	socket.on('disconnect', () => {
// 		console.log(`user ${socket.id} disconnected`);
// 		// @ts-expect-error
// 		delete onlineUsers[socket.id];
// 	});
// });
