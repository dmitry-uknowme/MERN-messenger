import React, { useState } from 'react';
import './Main.css';

const Main = () => {
	const [message, setMessage] = useState('');
	const [postedMessages, setPostedMessages] = useState([]);

	const [user, setUser] = useState('Dimon4ik-limon4ik');

	const sendMessage = (e) => {
		e.preventDefault();
		setPostedMessages((state) => [...state, message]);
		setMessage('');
	};
	return (
		<div className='main'>
			<div className='main__message'>
				<div className='main__message-area'>
					{postedMessages?.map((message) => (
						<div key={message}>
							New message {message} from user {user}
						</div>
					))}
					<br />
				</div>
				<textarea className='main__message-input' type='text' placeholder='Введите сообщение' onChange={(e) => setMessage(e.target.value)} />
				<button type='button' className='main__message-submit' onClick={sendMessage}>
					Send message
				</button>
			</div>
		</div>
	);
};

export default Main;
