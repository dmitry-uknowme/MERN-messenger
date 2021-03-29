const express = require('express');
const connectDB = require('./DB/connect');
const { userTable } = require('./DB/schemas');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 9000;

connectDB();

app.get('/users', async (req, res) => {
	await userTable.find({}, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
	console.log(req.body);
});

app.get('/users/:id', async (req, res) => {
	const userId = req.params.id;
	// console.log(userId);
	await userTable.findOne({ id: userId }, (err, result) => {
		if (err) {
			console.log(err);
		} else {
			res.json(result);
		}
	});
	console.log(req.body);
});

app.get('/messages', (req, res) => {
	console.log('messages');
});

io.on('connection', (socket) => {
	console.log('user connected', socket.id);
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
