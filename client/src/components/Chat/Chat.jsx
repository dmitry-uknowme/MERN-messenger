import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, history, useHistory } from 'react-router-dom';

import './Chat.css';

const Chat = () => {
	const { id } = useParams();
	const history = useHistory();
	// console.log(id, 'chat');
	const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState('');
	const userData = useSelector((state) => state.user.data);
	const isLogged = useSelector((state) => state.user.isLogged);

	const userChats = userData.chats;

	const sendMessage = (e) => {
		e.preventDefault();
		// setPostedMessages((state) => [...state, message]);
		// setMessage('');
	};
	console.log(chatMessages);
	useEffect(() => {
		if (!isLogged) {
			history.push('/login');
		}
		for (const chat of userChats) {
			if (chat.id === parseInt(id)) {
				setChatMessages(chat.messages);
			}
		}
	}, [isLogged, userChats]);

	return (
		<div className='chat'>
			<div className='chat__message'>
				<div className='chat__message-area'>
					{chatMessages?.map((messages) => (
						<div key={messages.message}>New message {messages.message} from user</div>
					))}
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
