import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, history, useHistory } from 'react-router-dom';

import './Chat.css';

const Chat = () => {
	const { id } = useParams();
	const history = useHistory();
	// console.log(id, 'chat');

	const [message, setMessage] = useState('');
	const userData = useSelector((state) => state.user.data);
	const isLogged = useSelector((state) => state.user.isLogged);
	// const userChats = userData.chats;

	console.log(userData);

	if (userData) {
		console.log(userData.chats);
		// const userChat = userData.chats.filter((chat) => {
		// console.log(chat);
		// 	return chat['id'] === id;
		// });
		// console.log('chat', userChat);
	}
	// console.log(userChats);
	// if (userChats) {
	// 	for (const chat of userChats) {
	// 		if (chat['id'] === id) {
	// 			const ChatId = chat['id'];
	// 			console.log('chat', userChats[ChatId]);
	// 		}
	// 	}
	// }
	// // console.log(userChat);

	const sendMessage = (e) => {
		e.preventDefault();
		// setPostedMessages((state) => [...state, message]);
		// setMessage('');
	};

	useEffect(() => {
		if (!isLogged) {
			history.push('/login');
		}
	}, [isLogged]);

	return (
		<div className='chat'>
			<div className='chat__message'>
				<div className='chat__message-area'>
					{/* {userChats?.map((messages) => (
						<div key={messages.message}>New message {messages.message} from user</div>
					))} */}
					<br />
				</div>
				<textarea className='chat__message-input' type='text' placeholder='Введите сообщение' onChange={(e) => setMessage(e.target.value)} />
				<button type='button' className='chat__message-submit' onClick={sendMessage}>
					Send message
				</button>
			</div>
		</div>
	);
};

export default Chat;
