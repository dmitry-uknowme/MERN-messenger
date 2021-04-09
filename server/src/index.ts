import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
const app = express();
import { userTable } from './DB/schemas';
import connectDB from './DB/connect';
import { Query } from 'mongoose';

const server = createServer(app);
const io = new Server(server, {});

const port: String | Number = process.env.PORT || 9000;

connectDB();

const onlineUsers: Object = {};

io.on('connection', (socket: Socket) => {
	socket.on('USER:JOIN', (data) => {
		// @ts-expect-error
		onlineUsers[socket.id] = data.userId;
		console.log('online users', onlineUsers);
	});

	socket.on('MESSAGE:SEND', (data: any) => {
		socket.broadcast.emit('MESSAGE:SENT', data);
		const { userId, chatId, message } = data;
		userTable.findOne({ id: userId }, async (err: any, user: any) => {
			const chats = user.chats;
			for (const chat of chats) {
				if (chat.id === chatId) {
					chat.messages.push(message);
					user.markModified('chats');
					user.save((err: any) => {
						if (err) throw Error;
						console.log(`message ${message} was send to user id ${chatId}`);
					});
				}
			}
		});
		userTable.findOne({ id: chatId }, async (err: any, user: any) => {
			const chats = user.chats;
			message.isMy = false;
			for (const chat of chats) {
				if (chat.id === userId) {
					chat.messages.push(message);
					user.markModified('chats');
					user.save((err: any) => {
						if (err) throw Error;
						console.log(`message ${message} was send to user id ${userId}`);
					});
				}
			}
		});
	});

	socket.on('disconnect', () => {
		console.log(`user ${socket.id} disconnected`);
		// @ts-expect-error
		delete onlineUsers[socket.id];
	});
});

app.get('/users', async (req: Request, res: Response) => {
	await userTable.find({}, (err: Error, result: JSON) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/users/:id', async (req: Request, res: Response) => {
	const userId = req.params.id;
	// console.log(userId);
	await userTable.findOne({ id: userId }, (err: Error, result: JSON) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
	console.log(req.body);
});

server.listen(port, () => console.log(`Listening on port ${port}`));

const Dmitry = new userTable({
	id: 2,
	name: 'Андрей',
	surname: 'Чистяков',
	chats: [
		{
			type: 'user',
			id: 1,

			messages: [
				{ isMy: false, message: 'димасик можешь распечатать' },
				{ isMy: true, message: 'Да' },
				{ isMy: false, message: 'Ок' },
				{ isMy: true, message: 'Сорян не смогу' },
				{ isMy: true, message: 'Сорян не смогу' },
				{ isMy: true, message: 'Сорян не смогу' },
				{ isMy: true, message: 'А не смогу', hash: '1617919953093.А не смогу' },
			],
		},
		{
			type: 'user',
			id: 3,

			messages: [
				{ isMy: true, message: 'Салам Байдер' },
				{ isMy: false, message: 'Здарова Чистый' },
			],
		},
	],
});

// const Dmitry = new userTable({
// 	id: 3,
// 	name: 'Байдерин',
// 	surname: 'Никита',
// });
// Dmitry.save().then(() => console.log('data uploaded'));
