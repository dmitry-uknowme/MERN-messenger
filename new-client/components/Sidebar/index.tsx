import React from 'react';
import styles from './sidebar.module.sass';
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import Link from 'next/link';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Sidebar = () => {
	const isAdmin = useTypedSelector(({ user }) => user.isAdmin);
	return (
		<nav className='sidebar__section col-md-3'>
			<div className={styles.sidebar}>
				<div className={styles.sidebar__item}>
					<div className='sidebar__itemText'>Мой профиль</div>
					<PersonIcon className={styles.sidebar__itemIcon}></PersonIcon>
				</div>
				<div className={styles.sidebar__item}>
					<div className='sidebar__itemText'>Новости</div>
					<FiberNewIcon className={styles.sidebar__itemIcon}></FiberNewIcon>
				</div>

				<div className={styles.sidebar__item}>
					<Link href='/chats'>
						<>
							<div className='sidebar__itemText'>Сообщения</div>
							<SmsIcon className={styles.sidebar__itemIcon}></SmsIcon>
						</>
					</Link>
				</div>
				<div className={styles.sidebar__item}>
					<Link href='/friends' className={styles.sidebar__item}>
						<>
							<div className='sidebar__itemText'>Друзья</div>
							<GroupIcon className={styles.sidebar__itemIcon}></GroupIcon>
						</>
					</Link>
				</div>
				{isAdmin && (
					<Link href='/admin' className={styles.sidebar__item}>
						<>
							<div className='sidebar__itemText'>Админ-панель</div>
							<CodeIcon className={styles.sidebar__itemIcon}></CodeIcon>
						</>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Sidebar;
