import React, { createRef, useCallback, useEffect, useRef, useState } from 'react';
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

const Chat = ({ serverChat }) => {
	const [chat, setChat] = useState<IChat>(serverChat);
	const [message, setMessage] = useState('');
	const userData: IUser = useTypedSelector(({ user }) => user);
	const chatRef = useRef();
	const isMessageEmpty = message.trim() === '';
	const chatMessages = chat.messages;

	const msgClass = (msg: any) => cn(styles.chat__message, { [styles.chat__messageFrom]: msg.user === userData._id }, { [styles.chat__messageTo]: msg.user !== userData._id });

	const scrollChat = useCallback((toPos: number | string) => {
		if (!chatRef.current) return false;
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
				clearInterval(scrollTimer);
			}
			chatEl.scrollBy(0, i);
			i++;
		}, 10);
	}, []);

	const chatName = () => {
		if (!chat.members?.length) return 'Без названия';
		if (chat.members.length > 2) {
			let nameStr = '';
			return chat.members.map((member: IUser) => nameStr + member.name + ' ' + member.surname).join();
		}
		const fullName = chat.members.find((member: IUser) => member._id !== userData._id);
		return `${fullName.name} ${fullName.surname}`;
	};

	const sendMessage = async (e) => {
		if (isMessageEmpty) return false;
		const response = await axios.post(`http://localhost:9000/api/chats/${chat._id}/messages`, { user: userData._id, text: message });
		await socket.emit('MESSAGE:SEND', { ...response.data, chatId: chat._id });
	};

	const onMessageSent = async () => {
		socket.on('MESSAGE:SENT', async (data) => {
			console.log({ ...chat, messages: [...chat.messages, data] });
			setChat((state: IChat) => ({ ...state, messages: [...state.messages, data] }));
			// await addChatMessage({ _id: data.chatId, user: data.user, text: data.text });
			//  messages: [...chat.messages, action.payload]
			// chats: state.chats.map((chat) => (chat._id === action.payload.chatId ? { ...chat, messages: [...chat.messages, action.payload] } : '')));
			await scrollChat('bottom');
		});
	};

	useEffect(() => {
		chatRef.current = document.querySelector(`.${styles.chat__messages}`);
		// socket.emit('CHAT:JOIN', { chat: chatId });
		onMessageSent();
		// socket.on('CHAT:JOINED', (data) => {
		// 	console.error('data', data);
		// });
		setTimeout(() => scrollChat('bottom'), 0);
	}, []);

	return (
		<section className={`${styles.chat__section} col-md-8 col-sm-9`}>
			<div className={styles.chat}>
				<div className={styles.chat__header}>{chatName()}</div>
				<div className={styles.chat__messages}>
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
