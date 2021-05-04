import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, history, useHistory } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import socket from '../../utils/socket';
import SendIcon from '@material-ui/icons/Send';
import './Chat.sass';

const Chat = () => {
	const { id } = useParams();
	const history = useHistory();
	const [chatMessages, setChatMessages] = useState([]);
	const [message, setMessage] = useState('');
	const userData = useSelector((state) => state.user.data);
	const isMessageEmpty = message.trim() === '';
	const userChats = userData.chats;
	const currentChat = userChats.find((chat) => chat.id === parseInt(id));

	const scrollChat = (toPos) => {
		const chatEl = document.querySelector('.chat__messages');
		if (chatEl.scrollHeight === chatEl.clientHeight) return false;
		if (toPos === 'bottom') {
			toPos = 100;
		} else if (toPos === 'top') {
			toPos = 0;
		}

		let i = 0;
		const scrollTimer = setInterval(() => {
			const scrollPosition = (chatEl.scrollTop / (chatEl.scrollHeight - chatEl.clientHeight)) * 100;
			if (scrollPosition === toPos) return clearInterval(scrollTimer);

			chatEl.scrollBy(0, i);
			i++;
		}, 10);
	};

	const sendMessage = (e) => {
		if (isMessageEmpty) return false;
		e.preventDefault();
		socket.emit('MESSAGE:SEND', {
			message: { isMy: true, message, hash: `${Date.now()}.${message}` },
			userId: userData.id,
			chatId: parseInt(id),
		});
		setChatMessages((state) => [...state, { isMy: true, message }]);
		setTimeout(() => scrollChat('bottom'), 200);
	};
	useEffect(() => {
		setTimeout(() => scrollChat('bottom'), 0);
		socket.on('MESSAGE:SENT', (data) => {
			console.log('message data', data);
			setChatMessages((state) => [
				...state,
				{
					isMy: false,
					message: data.message.message,
					hash: `${Date.now()}.${message}`,
				},
			]);
			setTimeout(() => scrollChat('bottom'), 100);
		});
		for (const chat of userChats) {
			if (chat.id === parseInt(id)) {
				setChatMessages(chat.messages);
			}
		}
		document.title = `Чат с ${currentChat.name} ${currentChat.surname}`;
	}, [userChats]);

	return (
		<section className='chat__section col-md-8 col-sm-9'>
			<div className='chat'>
				<div className='chat__header'>
					{currentChat.name} {currentChat.surname}
				</div>
				<TransitionGroup className='chat__messages'>
					{chatMessages?.map((messages, id) => (
						<>
							{messages.isMy ? (
								<CSSTransition key={id} classNames='message' timeout={500}>
									<div className='chat__message chat__message-from'>{messages.message}</div>
								</CSSTransition>
							) : (
								<CSSTransition key={id} classNames='message' timeout={500}>
									<div className='chat__message chat__message-to'>{messages.message}</div>
								</CSSTransition>
							)}
						</>
					))}
				</TransitionGroup>

				<div className='chat__input'>
					<textarea className='chat__input-area' type='text' placeholder='Введите сообщение' onChange={(e) => setMessage(e.target.value)} />
					{!isMessageEmpty && <SendIcon type='button' className='chat__input-send' onClick={sendMessage}></SendIcon>}
				</div>
			</div>
		</section>
	);
};

export default Chat;
