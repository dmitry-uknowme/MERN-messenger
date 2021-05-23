import { useEffect, useState } from 'react';
import Link from 'next/link';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './chatList.module.sass';
import useActions from '../../hooks/useActions';
import { IChat } from '../../types/chat';
import { IUser } from '../../types/user';

const Messenger = () => {
	const { fetchUser, fetchUserChats, setUserOnline } = useActions();
	const userData: IUser = useTypedSelector(({ user }) => user);
	const userChats = useTypedSelector(({ user }) => user.chats);

	const lastMessage = (id: number) => {
		const currentChat = userChats.find((chat: IChat) => chat._id === id);
		if (!currentChat.messages?.length) return 'У вас пока нет сообщений';
		return currentChat.messages[currentChat.messages.length - 1].text;
	};

	const chatName = (id: number) => {
		const currentChat = userChats.find((chat: IChat) => chat._id === id);
		if (!currentChat.members?.length) return 'Без названия';
		if (currentChat.members.length > 2) {
			let nameStr = '';
			return currentChat.members.map((member: IUser) => nameStr + member.name + ' ' + member.surname).join();
		}
		const fullName = currentChat.members.find((member: IUser) => member._id !== userData._id);
		return `${fullName.name} ${fullName.surname}`;
	};

	return (
		<div className='chat-list__section col-md-8 col-sm-9'>
			<div className={styles.chatList}>
				<div className='col-md-12'>
					{console.log(userChats)}
					{userChats ? (
						userChats.map(({ _id }) => (
							<Link key={_id} className={styles.chatList__cardLink} href={`chats/${_id}`}>
								<div className='card messenger__card'>
									<div className='card-body messenger__card-body'>
										<h5 className='card-title messenger__card-user'>
											{chatName(_id)} <span className={styles.chatList__cardUser_status}>онлайн</span>
										</h5>

										<p className='card-text messenger__card-message'>{lastMessage(_id)}</p>
									</div>
								</div>
							</Link>
						))
					) : (
						<div>У вас пока нет диалогов</div>
					)}
				</div>
			</div>
			<div className='col-md-4 offset-md-4 d-flex justify-content-center'>
				<AddBoxIcon className={styles.chatList__new}></AddBoxIcon>
			</div>
		</div>
	);
};

export default Messenger;
