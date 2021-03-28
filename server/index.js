const express = require('express');

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 9000;

app.get('/messages', (req, res) => {
	console.log('messages');
});

io.on('connection', (socket) => {
	console.log('user connected', socket.id);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
