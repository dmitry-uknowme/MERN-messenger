import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import AddBoxIcon from '@material-ui/icons/AddBox';

import './Messenger.sass';

const Messenger = () => {
	const [usedUsers, setUsedUsers] = useState([]);
	const userData = useSelector((state) => state.user.data);
	const userChats = userData.chats;
	const lastMessage = (id) => {
		return userChats[id]['messages'][userChats[id]['messages'].length - 1]['message'];
	};

	const getChatsWithUsers = () => {
		if (userChats) {
			userChats.map(async (chat) => {
				await axios.get(`/users/${chat.id}`).then((response) => {
					setUsedUsers((state) => [...state, response.data]);
				});
			});
		}
	};

	useEffect(() => {
		getChatsWithUsers();
	}, []);

	return (
		<div className='messenger'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-8 offset-md-2'>
						<div className='col-md-12'>
							{userChats ? (
								userChats.map((chat, id) => (
									<Link key={chat.id} className='messenger__card-link' to={`chat/${chat.id}`}>
										<div className='card messenger__card'>
											<div className='card-body messenger__card-body'>
												<h5 className='card-title messenger__card-user'>
													{usedUsers[id]?.name} {usedUsers[id]?.surname} <span className='messenger__card-user_status'>онлайн</span>
												</h5>

												<p className='card-text messenger__card-message'>{lastMessage(id)}</p>
											</div>
										</div>
									</Link>
								))
							) : (
								<div>У вас пока нет диалогов</div>
							)}
						</div>
						<div className='col-md-4 offset-md-4 d-flex justify-content-center'>
							<AddBoxIcon className='messenger__new'></AddBoxIcon>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Messenger;
