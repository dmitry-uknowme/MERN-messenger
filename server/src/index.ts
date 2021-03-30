import express, { Request, Response } from 'express';
import { createServer } from 'http';
import { Server, Socket } from 'socket.io';
const app = express();
import { userTable } from './DB/schemas';
import connectDB from './DB/connect';

const server = createServer(app);
const io = new Server(server, {});

const port: String | Number = process.env.PORT || 9000;

connectDB();

io.on('connection', (socket: Socket) => {
	socket.on('sendMessage', (data: any) => {
		console.log(socket);
	});
	socket.on('test', (data: any) => {
		console.log('socket test', socket.id, data);
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

app.post('/users/add_message', async (req: Request, res: Response) => {
	const { userId, chatId, message } = req.body;
	// if (err) {
	// 	console.log(err);
	// } else {
	// 	res.json(result);
	// }
	// await userTable.findOneAndUpdate({id:userId},{},(err:Error, result:JSON)=> {
	// 		if(err)
	// 		{
	// 			console.log(err)
	// 		}
	// 		else {
	// 			res.json(result);
	// 		}
	// });
	// @ts-expect-error
	// userTable.findOneAndUpdate({ id: userId }, { $push: { 'chats[chatId].messages': message } });
	userTable.findOneAndUpdate({ id: 1 }, { $set: { 'chats.0.messages.0': 'new value' } });
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
