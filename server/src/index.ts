import express, {Request,Response}  from 'express';
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
import {userTable} from './DB/schemas'
import connectDB from './DB/connect'



const port:String|Number = process.env.PORT || 9000;

connectDB()

	app.get('/users', async (req:Request, res:Response) => {
	await userTable.find({}, (err:Error, result:JSON) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/users/:id', async (req:Request, res:Response) => {
	const userId = req.params.id;
	// console.log(userId);
	await userTable.findOne({ id: userId }, (err:Error, result:JSON) => {
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
				{ isMy: true, message: 'Да' },
				{ isMy: false, message: 'димасик можешь распечатать' },
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