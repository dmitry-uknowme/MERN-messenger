import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import styles from './friendList.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Link from 'next/link';
import { IUser } from '../../types/user';
import cn from 'classnames';

const FriendList = () => {
	const userFriends: IUser[] = useTypedSelector(({ user }) => user.friends.sort((a: IUser, b: IUser) => (a.name !== b.name ? (a.name < b.name ? -1 : 1) : 0)));
	const [friendInput, setFriendInput] = useState<string>('');
	const [foundFriends, setFoundFriends] = useState<IUser[]>(userFriends);
	const findUsers = () => {
		setFoundFriends(userFriends.filter((friend) => friend.name.includes(friendInput) || friend.surname.includes(friendInput)));
	};

	const statusClass = (status: boolean) => cn(styles.friendList__cardUserStatus, { [styles._online]: status });

	useEffect(() => {
		findUsers();
	}, [friendInput]);

	return (
		<section className='friends__section col-md-8 col-sm-9'>
			<div className='friends'>
				<div className='col-md-12'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-6 offset-md-3'>
								<div className={styles.friendList__search}>
									<SearchIcon className={styles.friendList__searchIcon} onClick={findUsers} />
									<input className={styles.friendList__searchInput} type='text' placeholder='Поиск' onChange={(e) => setFriendInput(e.target.value)} />
								</div>
							</div>
						</div>
					</div>
					{foundFriends.map(({ _id, name, surname, isOnline }) => (
						<Link key={_id} href='/'>
							<div className='card messenger__card'>
								<div className='card-body messenger__card-body'>
									<h5 className='card-title messenger__card-user'>
										{name} {surname} <span className={statusClass(isOnline)}>{isOnline ? 'онлайн' : 'оффлайн'}</span>
									</h5>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
};

export default FriendList;
