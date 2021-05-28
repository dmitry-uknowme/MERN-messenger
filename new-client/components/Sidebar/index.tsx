import React from 'react';
import styles from './sidebar.module.sass';
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import Link from 'next/link';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Sidebar = () => {
	const isAdmin = useTypedSelector(({ user }) => user.isAdmin);
	const nickname = useTypedSelector(({ user }) => user.nickname);
	return (
		<nav className='sidebar__section col-md-3'>
			<div className={styles.sidebar}>
				<Link href={`/profile/${nickname}`}>
					<div className={styles.sidebar__item}>
						<div className='sidebar__itemText'>Мой профиль</div>
						<PersonIcon className={styles.sidebar__itemIcon} />
					</div>
				</Link>

				<Link href='/posts'>
					<div className={styles.sidebar__item}>
						<div className='sidebar__itemText'>Новости</div>
						<FiberNewIcon className={styles.sidebar__itemIcon} />
					</div>
				</Link>

				<Link href='/chats'>
					<div className={styles.sidebar__item}>
						<div className='sidebar__itemText'>Сообщения</div>
						<SmsIcon className={styles.sidebar__itemIcon} />
					</div>
				</Link>

				<Link href='/friends'>
					<div className={styles.sidebar__item}>
						<div className='sidebar__itemText'>Друзья</div>
						<GroupIcon className={styles.sidebar__itemIcon} />
					</div>
				</Link>

				<Link href='/audios'>
					<div className={styles.sidebar__item}>
						<div className='sidebar__itemText'>Музыка</div>
						<AudiotrackIcon className={styles.sidebar__itemIcon} />
					</div>
				</Link>

				{isAdmin && (
					<Link href='/admin'>
						<div className={styles.sidebar__item}>
							<div className='sidebar__itemText'>Админ-панель</div>
							<CodeIcon className={styles.sidebar__itemIcon} />
						</div>
					</Link>
				)}
			</div>
		</nav>
	);
};

export default Sidebar;
