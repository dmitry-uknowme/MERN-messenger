import { useEffect, useState } from 'react';
import Link from 'next/link';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './chatList.module.sass';

const Messenger = () => {
	// const dispatch = useDispatch();
	// const [userChats, setUserChats] = useState();
	const userChats = useTypedSelector(({ user }) => user.chats);

	// const lastMessage = (id) => {
	//   const currentChat = userChats.find((chat) => chat.id === id);
	//   return currentChat.messages[currentChat.messages.length - 1].message;
	// };

	// useEffect(() => {
	//   document.title = 'Сообщения';
	//   setUserChats(userData.chats);
	// }, [userData]);

	return (
		<div className='chat-list__section col-md-8 col-sm-9'>
			<div className={styles.chatList}>
				<div className='col-md-12'>
					{userChats?.length > 1 ? (
						userChats.map(({ id, name, surname, messages }) => (
							<>chat</>
							// <Link key={id} className='messenger__card-link' to={`chat/${id}`}>
							// 	<div className='card messenger__card'>
							// 		<div className='card-body messenger__card-body'>
							// 			<h5 className='card-title messenger__card-user'>
							// 				{name} {surname} <span className='messenger__card-user_status'>онлайн</span>
							// 			</h5>

							// 			<p className='card-text messenger__card-message'>{lastMessage(id)}</p>
							// 		</div>
							// 	</div>
							// </Link>
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
