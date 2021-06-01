import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PauseIcon from '@material-ui/icons/Pause';
import StopIcon from '@material-ui/icons/Stop';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import styles from './header.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { signOut } from 'next-auth/client';

export const Header = () => {
	const router = useRouter();

	const logoutHandler = () => {
		setUserOnline(false);
		signOut();
		// router.push('/login');
	};

	const userData = useTypedSelector((state) => state.user);
	const [audioPlaying, setAudioPlaying] = useState({
		playing: true,
		artist: 'Автор',
		title: 'Аудио',
	});
	const [notifications, setNotifications] = useState<number>(/* (Math.random() * (20 - 1 - 0)).toFixed(0) */ 0);
	const { setUserOnline } = useActions();
	return (
		<header className='header__section col-md-12'>
			<div className={styles.header__container}>
				<div className={styles.header}>
					<Link href='/'>
						<div className={styles.header__logo}>
							<b>MESSENGER</b>
							{/* <Image src='/img/vk.svg' alt='Picture of the author' width={30} height={30} /> */}
						</div>
					</Link>
					<div className={styles.header__search}>
						<SearchIcon className={styles.header__searchIcon} />
						<input className={styles.header__searchInput} type='text' placeholder='Поиск друзей' />
					</div>
					<div className={styles.header__notifications} onClick={() => setNotifications(0 + Math.random() * (20 - 1 - 0)).toFixed(0)}>
						<NotificationsIcon className={styles.header__noficationsIcon} />
						<span className='header__noficationsCounter'>{notifications}</span>
					</div>
					<div className={styles.header__audio}>
						<SkipPreviousIcon className='header__audioPrev' />
						{audioPlaying['playing'] ? (
							<PauseIcon className={styles.header__audioPause} onClick={() => setAudioPlaying({ playing: false })} />
						) : (
							<StopIcon
								className={styles.header__audioStop}
								onClick={() =>
									setAudioPlaying({
										playing: true,
										artist: 'Audio1',
										title: 'Audio1',
									})
								}
							/>
						)}
						<SkipNextIcon className='header__audioNext' />
						<div className={styles.header__audioPlaying}>
							{audioPlaying ? (
								<>
									{audioPlaying['artist']} - {audioPlaying['title']}
								</>
							) : (
								''
							)}
						</div>
					</div>
					<div className={styles.header__profile}>
						{userData.name} {userData.surname} <ExitToAppIcon onClick={logoutHandler} />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
