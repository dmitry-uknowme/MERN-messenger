import React, { useEffect, useRef, useState } from 'react';
import styles from './login.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { useRouter } from 'next/router';
import useModal from '../../hooks/useModal';
import { signIn, signOut, useSession, providers, csrfToken } from 'next-auth/client';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import FriendList from '../FriendList';
import Modal from '../Modal';
import SwiperCore, { Virtual, Navigation, Scrollbar, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { IUser } from '../../types/user';
SwiperCore.use([Virtual, Navigation, Scrollbar, Pagination]);

const Login = ({ serverUsers }) => {
	const nextBtn = useRef(null);
	const prevBtn = useRef(null);
	const [registration, setRegistration] = useState(false);
	const [users, setUsers] = useState<IUser[]>(serverUsers);
	const router = useRouter();
	const { fetchUser, setUserOnline } = useActions();
	const [userInput, setUserInput] = useState('dima-bogatyrev');
	const [userPassword, setUserPassword] = useState('dima-bogat');
	const userData = useTypedSelector((state) => state.user);
	const btnHandler = async () => {
		await fetchUser(userInput);
		await setUserOnline(true);
		// signIn('Nickname Provider', { username: userInput, password: '1234' });
		await router.push('/chats');
	};

	return (
		<div className={styles.login}>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-4 offset-md-4'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Введите никнейм пользователя:
						</label>
						<input type='text' className='form-control' value={userInput} onChange={(e) => setUserInput(e.target.value)} />
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Введите пароль:
						</label>
						<input type='password' className='form-control' value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
						<div className='d-flex justify-content-center' style={{ cursor: 'pointer' }} onClick={() => setRegistration((state) => !state)}>
							Еще нет аккаунта? Зарегистрироваться
						</div>
						<div className='d-flex justify-content-center mt-3'>
							<button type='submit' className='btn btn-primary' onClick={btnHandler}>
								Войти
							</button>
						</div>
					</div>
					{registration && (
						<Swiper
							onSlideChange={(swiper) => console.log(swiper.realIndex)}
							// slidesPerView={1}
							// navigation

							pagination={{ type: 'fraction' }}
							style={{ height: 400, marginTop: 90 }}
							onInit={(swiper) => {
								swiper.params.navigation.prevEl = prevBtn.current;
								swiper.params.navigation.nextEl = nextBtn.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}}>
							<SwiperSlide>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Введите ваше имя:
								</label>
								<input type='text' />
							</SwiperSlide>
							<SwiperSlide>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Введите фамилию:
								</label>
								<input type='text' />
							</SwiperSlide>
							{/* <SwiperSlide>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Придумайте никнейм пользователя:
							</label>
							<input type='text' />
						</SwiperSlide> */}
							<SwiperSlide>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Придумайте пароль:
								</label>
								<input type='text' />
							</SwiperSlide>
							<SwiperSlide>
								<label htmlFor='exampleInputEmail1' className='form-label'>
									Загрузите фотографию:
								</label>
								<input type='file' />
								<PhotoCameraIcon />
							</SwiperSlide>
							<SwiperSlide>
								<label htmlFor='exampleInputEmail1' className='form-label' style={{ marginLeft: 'auto' }}>
									Добавьте знакомых друзей:
								</label>
								{/* <Swiper navigation slidesPerView={6} style={{ width: `${60}%` }}>
									{serverUsers.map(({ _id, name, surname }) => (
										<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10 }}>
											<div className='friendList__slide'>
												<div className={styles.friendList__slideProfile} />
												{name} <br />
												{surname}
											</div>
										</SwiperSlide>
									))}

									<button>Добавить</button>
								</Swiper> */}
							</SwiperSlide>
							<h2 slot='container-end' style={{ position: 'absolute', zIndex: 100, top: `${2}%`, left: `${50}%`, transform: 'translateX(-50%)' }}>
								Регистрация
							</h2>
							{/* <button ref={prevBtn} style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, left: `${2}%`, transform: 'translateY(-50%)' }}>
								Prev
							</button> */}
							<button slot='container-end' className='btn btn-danger' style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, left: `${2}%`, transform: 'translateY(-50%)' }} ref={prevBtn}>
								Назад
							</button>
							<button slot='container-end' className='btn btn-success' style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, right: `${2}%`, transform: 'translateY(-50%)' }} ref={nextBtn}>
								Дальше
							</button>
						</Swiper>
					)}
				</div>
			</div>
		</div>
	);
};

export default Login;

{
	/* <Swiper>
	{serverUsers.map(({ _id, name, surname }) => (
		<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10 }}>
			<div className='friendList__slide'>
				<div className={styles.friendList__slideProfile} />
				{name} <br />
				{surname}
			</div>
		</SwiperSlide>
	))}
</Swiper>; */
}
