import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, history, useHistory } from 'react-router-dom';
import socket from '../../utils/socket';

import './Chat.sass';

const Chat = () => {
	const { id } = useParams();
	const history = useHistory();
	const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState('');
	const userData = useSelector((state) => state.user.data);

	const userChats = userData.chats;

	const sendMessage = (e) => {
		e.preventDefault();
		socket.emit('MESSAGE:SEND', {
			message: { isMy: true, message, hash: `${Date.now()}.${message}` },
			userId: userData.id,
			chatId: parseInt(id),
		});
		setChatMessages((state) => [...state, { isMy: true, message }]);
	};
	useEffect(() => {
		socket.on('MESSAGE:SENT', (data) => {
			console.log('message data', data);
			setChatMessages((state) => [...state, { isMy: false, message: data.message.message }]);
		});
		for (const chat of userChats) {
			if (chat.id === parseInt(id)) {
				setChatMessages(chat.messages);
			}
		}
	}, []);

	return (
		<div className='chat'>
			<div className='chat__message'>
				<div className='chat__message-area'>
					{chatMessages?.map((messages) => (
						<>
							{messages.isMy ? (
								<div className='chat__message-item chat__message-item-from' key={messages.message}>
									{messages.message}
								</div>
							) : (
								<div className='chat__message-item chat__message-item-to' key={messages.message}>
									{messages.message}
								</div>
							)}
						</>
					))}
					<br />
				</div>
				<textarea className='chat__message-input' type='text' placeholder='Введите сообщение' onChange={(e) => setMessage(e.target.value)} />
				<button type='button' className='chat__message-submit' onClick={sendMessage}>
					Отправить сообщение
				</button>
			</div>
		</div>
	);
};

export default Chat;
