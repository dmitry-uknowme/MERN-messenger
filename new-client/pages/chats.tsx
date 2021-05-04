import React, { useEffect, useState } from 'react';
import SocketService from '../components/socket';
import io from 'socket.io-client';
//@ts-expect-error
const socket = io('http://localhost:9000');

// const socket = io('http://localhost:9000');
const ChatsPage = () => {
	const [count, setCount] = useState(0);
	socket.on('connect', function () {
		console.log('Connected 1', socket);
	});
	socket.on('MESSAGE:SENT', (data) => {
		console.log('message data', data);
	});
	const send = () => {
		socket.emit('MESSAGE:SEND', { message: 'rabotaet' });
	};

	// useEffect(() => {
	// 	console.log('effect');
	// 	socket.on('connect', function () {
	// 		console.log('Connected 1');
	// 	});
	// }, [count]);
	return (
		<div>
			Chats Page <button onClick={send}>Press to send</button>
		</div>
	);
};

export default ChatsPage;
