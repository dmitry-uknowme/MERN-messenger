import React, { useState } from 'react';
import {useParams} from 'react-router-dom'

import './Chat.css';

const Chat = () => {

	const {id} = useParams()
	console.log(id) 

	const [message, setMessage] = useState('');
	const [postedMessages, setPostedMessages] = useState([]);

	const [user, setUser] = useState('Dimon4ik-limon4ik');

	const sendMessage = (e) => {
		e.preventDefault();
		setPostedMessages((state) => [...state, message]);
		setMessage('');
	};
	return (
		<div className='chat'>
			<div className='chat__message'>
				<div className='chat__message-area'>
					{postedMessages?.map((message) => (
						<div key={message}>
							New message {message} from user {user}
						</div>
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
