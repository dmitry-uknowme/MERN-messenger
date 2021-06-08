import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';
import styles from './friendList.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useModal from '../../hooks/useModal';
import useActions from '../../hooks/useActions';
import Link from 'next/link';
import { IUser } from '../../types/user';
import cn from 'classnames';
import { Tab, Tabs } from '@material-ui/core';
import socket from '../../utils/socket';
import axios from 'axios';
import Modal from '../Modal';

const FriendList = ({ serverAllUsers }) => {
	const { addUserFriend } = useActions();
	const { toggleModal } = useModal();
	const userData: IUser = useTypedSelector(({ user }) => user);
	const [allUsers, setAllUsers] = useState<IUser[]>(serverAllUsers);
	const userFriends: IUser[] = useTypedSelector(({ user }) => user.friends.sort((a: IUser, b: IUser) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)));
	//.sort((a: IUser, b: IUser) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)));
	const [friendInput, setFriendInput] = useState<string>('');
	const [foundFriends, setFoundFriends] = useState<IUser[]>(userFriends);
	const [tab, setTab] = useState('friends');

	const findUsers = () => {
		if (friendInput.trim() === '') {
			console.log('empty');
			setFoundFriends(userFriends);
			setAllUsers(serverAllUsers);
			return false;
		}

		setFoundFriends((state) => state.filter((friend) => friend.name.includes(friendInput) || friend.surname.includes(friendInput)));
		// console.log(
		// 	'search',
		// 	friendInput,
		// 	foundFriends.filter((friend) => friend.name.includes(friendInput) || friend.surname.includes(friendInput))
		// );
		setAllUsers((state) => state.filter((friend) => friend.name.includes(friendInput) || friend.surname.includes(friendInput)));
	};

	const tabsHandler = (e, value) => {
		setTab(value);
	};

	const inputHandler = (e) => {
		setFriendInput(e.target.value);
	};

	const isFriend = (id: string) => userFriends.find((friend) => friend._id === id);

	const statusClass = (status: boolean) => cn(styles.friendList__cardUserStatus, { [styles._online]: status });

	const addFriend = async (id: string) => {
		const user = allUsers.find((user) => user._id === id);
		const response = await axios.post('http://localhost:9000/api/posts', { text: `${userData.name} ${userData.surname} хочет добавить в друзья ${user.name} ${user.surname}` });
		await socket.emit('POST:SEND', { ...response.data });

		// addUserFriend(user);
		// setFoundFriends((state) => [...state, allUsers.find((user) => user._id === id)]);
		// setAllUsers((state) => [...state, state.find((user) => user._id === id)]);
		toggleModal({ title: 'Друзья', body: 'Заявка на добавление в друзья отправлена' });
	};

	useEffect(() => {
		findUsers();
	}, [friendInput, tab]);
	toggleModal();
	return (
		<section className={`${styles.friendList__section} col-md-8 col-sm-9`}>
			<Modal>
				<h1>Modal</h1>
			</Modal>
			<div className='friends'>
				<div className='col-md-12'>
					<div className='container'>
						<div className='row'>
							<div className={styles.friendList__header}>
								<Tabs value={tab} onChange={tabsHandler}>
									<Tab label='Друзья' value='friends' />
								</Tabs>
								<div className={styles.friendList__search}>
									<SearchIcon className={styles.friendList__searchIcon} onClick={findUsers} />
									<input className={styles.friendList__searchInput} type='text' placeholder='Поиск' value={friendInput} onChange={inputHandler} />
								</div>
								<Tabs value={tab} onChange={tabsHandler}>
									<Tab label='Все пользователи' value='all' />
								</Tabs>
							</div>
						</div>
					</div>

					{tab === 'friends' ? (
						foundFriends.map(({ _id, name, surname, photos, isOnline }) => (
							<div className='card friend__card'>
								{!isFriend(_id) ? <CheckIcon className={styles.friend__cardAdd} /> : <CloseIcon className={styles.friend__cardRemove} />}
								<Link key={_id} href='/'>
									<div className={`card-body ${styles.friend__cardBody}`}>
										<div className={styles.friend__cardImg} style={{ backgroundImage: `url(http://localhost:9000/${photos?.length ? photos[0] : 'image/no-img.png'})` }} />
										<h5 className={`card-title ${styles.friend__cardUser}`}>
											{name} {surname} {'  '}
											<span className={statusClass(isOnline)}>{isOnline ? <div>онлайн</div> : 'оффлайн'}</span>
										</h5>
									</div>
								</Link>
							</div>
						))
					) : tab === 'all' ? (
						allUsers ? (
							allUsers.map(({ _id, name, surname, photos, isOnline }) => (
								<div className='card messenger__card'>
									{!isFriend(_id) ? <CheckIcon className={styles.friend__cardAdd} onClick={() => addFriend(_id)} /> : <CloseIcon className={styles.friend__cardRemove} />}
									<Link key={_id} href='/'>
										<div className={`card-body ${styles.friend__cardBody}`}>
											<div className={styles.friend__cardImg} style={{ backgroundImage: `url(http://localhost:9000/${photos.length ? photos[0] : 'image/no-img.png'})` }} />
											<h5 className={`card-title ${styles.friend__cardUser}`}>
												{name} {surname} {'  '}
												<span className={statusClass(isOnline)}>{isOnline ? <div>онлайн</div> : 'оффлайн'}</span>
											</h5>
										</div>
									</Link>
								</div>
							))
						) : (
							<div>У вас пока нет друзей</div>
						)
					) : (
						''
					)}
				</div>
			</div>
		</section>
	);
};

export default FriendList;
