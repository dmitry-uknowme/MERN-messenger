import React, { useEffect, useRef, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import socket from '../../utils/socket';
import SendIcon from '@material-ui/icons/Send';
import styles from './chat.module.sass';
import cn from 'classnames';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../types/user';
import { IMessage, MessagePayload } from '../../types/message';
import { IChat } from '../../types/chat';
import useActions from '../../hooks/useActions';
import axios from 'axios';

const Chat = ({ chatId }) => {
	const [message, setMessage] = useState('');
	const userData: IUser = useTypedSelector(({ user }) => user);
	const currentChat: IChat = useTypedSelector(({ user }) => user.chats.find((chat: IChat) => chat._id === chatId));
	const { addChatMessage } = useActions();

	const isMessageEmpty = message.trim() === '';
	const chatRef = useRef(null);
	const chatMessages = currentChat.messages;

	const msgClass = (msg: any) => cn(styles.chat__message, { [styles.chat__messageFrom]: msg.user === userData._id }, { [styles.chat__messageTo]: msg.user !== userData._id });

	const scrollChat = (toPos: number | string) => {
		const chatEl = chatRef.current;
		if (chatEl.scrollHeight <= chatEl.clientHeight) return false;

		if (toPos === 'bottom') {
			toPos = 100;
		} else if (toPos === 'top') {
			toPos = 0;
		}

		let i = 0;
		const scrollTimer = setInterval(() => {
			const scrollPosition = (chatEl.scrollTop / (chatEl.scrollHeight - chatEl.clientHeight)) * 100;
			if (scrollPosition === toPos) {
				console.log('stop');
				clearInterval(scrollTimer);
			}
			console.log('scrolling', scrollPosition, toPos);
			chatEl.scrollBy(0, i);
			i++;
		}, 10);
	};

	const sendMessage = async (e) => {
		e.preventDefault();
		if (isMessageEmpty) return false;
		const response = await axios.post(`http://localhost:9000/api/chats/${currentChat._id}/messages`, { user: userData._id, text: message });
		await socket.emit('MESSAGE:SEND', { ...response.data, chatId: currentChat._id });
	};

	const onMessageSent = async () => {
		socket.on('MESSAGE:SENT', async (data: MessagePayload) => {
			await addChatMessage({ _id: data.chatId, user: data.user, text: data.text });
			await scrollChat('bottom');
			// await setMessage('');
		});
	};

	useEffect(() => {
		onMessageSent();
		setTimeout(() => scrollChat('bottom'), 0);
	}, []);

	return (
		<section className={`${styles.chat__section} col-md-8 col-sm-9`}>
			<div className={styles.chat}>
				<div className={styles.chat__header}></div>
				<div className={styles.chat__messages} ref={chatRef}>
					<TransitionGroup>
						{chatMessages?.map((msg) => (
							<>
								<CSSTransition key={msg._id} classNames={styles.message} timeout={500}>
									<div className={msgClass(msg)}>{msg.text}</div>
								</CSSTransition>
							</>
						))}
					</TransitionGroup>
				</div>

				<div className={styles.chat__input}>
					<textarea className={styles.chat__inputArea} type='text' placeholder='Введите сообщение' onChange={(e) => setMessage(e.target.value)} />
					{!isMessageEmpty && <SendIcon type='button' className={styles.chat__inputSend} onClick={sendMessage}></SendIcon>}
				</div>
			</div>
		</section>
	);
};

export default Chat;
