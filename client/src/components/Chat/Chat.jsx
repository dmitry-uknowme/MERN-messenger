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
		setChatMessages((state) => [...state, { isMy: true, message }]);
	};
	useEffect(() => {
		if (!isLogged) {
			history.push('/login');
		}
		for (const chat of userChats) {
			if (chat.id === parseInt(id)) {
				setChatMessages(chat.messages);
			}
		}
	}, [isLogged]);

	return (
		<div className='chat'>
			<div className='chat__message'>
				<div className='chat__message-area'>
					{chatMessages?.map((messages) => (
						<>{messages.isMy ? <div key={messages.message}>Вы отправили сообщение {messages.message} </div> : <div key={messages.message}>Вам пришло сообщение {messages.message}</div>}</>
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
