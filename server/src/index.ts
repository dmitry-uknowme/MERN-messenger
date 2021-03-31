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

io.on('connection', (socket: Socket) => {
	// console.log('new connection', socket.id);
	socket.on('MESSAGE:SEND', (data: any) => {
		// socket.emit('MESSAGE:SEND', data);
		const { userId, chatId, message } = data;
		userTable.findOne({ id: userId }, async (err: any, user: any) => {
			const chats = user.chats;
			for (const chat of chats) {
				if (chat.id === chatId) {
					chat.messages.push(message);
					user.markModified('chats');
					user.save((err: any) => {
						0;
						if (err) throw Error;
						console.log(`message ${message} was send to user id ${chatId}`);
					});
				}
			}
		});
	});
	socket.on('USER:JOIN', (userId) => {
		console.log('user joined', userId, socket.id);
		// console.log(socket.id, userId);
		// socket.emit('USER:JOINED', userId);
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
	id: 1,
	name: 'Дмитрий',
	surname: 'Богатырев',
	chats: [
		{
			type: 'user',
			id: 2,

			messages: [
				{ isMy: false, message: 'димасик можешь распечатать' },
				{ isMy: true, message: 'Да' },
			],
		},
		{
			type: 'user',
			id: 3,

			messages: [
				{ isMy: true, message: 'Ну я свой ещё не начинал' },
				{ isMy: false, message: 'Хуль там делать' },
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
