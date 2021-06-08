import React, { useEffect, useRef, useState } from 'react';
import { transliterate as tr } from 'transliteration';
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
import axios from 'axios';
import cn from 'classnames';
import { route } from 'next/dist/next-server/server/router';

SwiperCore.use([Virtual, Navigation, Scrollbar, Pagination]);

const Login = ({ serverUsers }) => {
	const [registration, setRegistration] = useState(false);
	const [users, setUsers] = useState<IUser[]>(serverUsers);
	const [registrationData, setRegistrationData] = useState({ name: '', surname: '', nickname: '', password: '', image: null, friends: [] });
	const router = useRouter();
	const { fetchUser, setUserOnline } = useActions();
	const [userInput, setUserInput] = useState('dima-bogatyrev');
	const [userPassword, setUserPassword] = useState('dima-bogat');
	const userData = useTypedSelector((state) => state.user);
	const [slider, setSlider] = useState(null);
	const { toggleModal, modalStatus } = useModal();
	const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
	const btnHandler = async () => {
		await fetchUser(userInput);
		await setUserOnline(true);
		// signIn('Nickname Provider', { username: userInput, password: '1234' });
		await router.push('/chats');
	};

	const nicknameExistModal = () => {
		toggleModal({ title: 'Регистрация', body: 'Данный никнейм уже используется. Выберите другой' });
	};

	const isEmpty = (field: string) => field?.trim() === '';

	const fillReqfieldsModal = () => {
		const { name, surname, password, nickname } = registrationData;
		if (!isEmpty(name) && !isEmpty(surname) && !isEmpty(password) && !isEmpty(nickname)) return false;
		let requiredFiels = [];
		if (!name) {
			requiredFiels.push('Имя');
		}
		if (!surname) {
			requiredFiels.push('Фамилия');
		}
		if (!password) {
			requiredFiels.push('Пароль');
		}
		if (!nickname) {
			requiredFiels.push('Никнейм');
		}

		return toggleModal({ title: 'Регистрация', body: `Заполните обязательные поля формы: ${requiredFiels.join(', ')}` });
	};

	const submitHandler = async () => {
		console.log(fillReqfieldsModal());
		if (fillReqfieldsModal()) return false;
		const { data } = await axios.get(`http://localhost:9000/api/users/${registrationData.nickname}`);
		console.log('nikuhwufa', !isEmpty(registrationData.nickname.toString()));
		if (data === '' && !isEmpty(registrationData.nickname.toString())) {
			console.log('ник доступен');
			const { name, surname, password, nickname, friends } = registrationData;
			const formData = new FormData();

			formData.append('name', name);
			formData.append('surname', surname);
			formData.append('nickname', nickname);
			formData.append('password', password);
			formData.append('friends', friends);
			// formData.appenda('image', nickname);
			console.log('form', formData);
			const { data } = await axios.post('http://localhost:9000/api/users', formData);

			toggleModal({ title: 'Регистрация', body: `Вы успешно зарегистрировались` });

			console.log(data);
			setTimeout(() => router.push(`/profile/${data._id}`), 500);
		} else {
			nicknameExistModal();
		}
	};
	const friendClass = (id) => cn(styles.friendList__slideProfile, { [styles.friendList__slideProfileActive]: registrationData?.friends?.find((friend) => friend === id) });

	const addFriendHandler = (id: string) => {
		if (!registrationData?.friends?.find((friend) => friend === id)) {
			setRegistrationData((state) => ({ ...state, friends: [...state.friends, id] }));
		} else {
			if (registrationData.friends.length) {
				setRegistrationData((state) => {
					console.log('state', state);
					return state.friends.filter((friend) => friend != id);
				});
			}
		}
	};

	useEffect(() => {
		if (!isEmpty(registrationData.name) && !isEmpty(registrationData.surname)) {
			const { name, surname } = registrationData;
			setRegistrationData((state) => ({ ...state, nickname: `${tr(name)}-${tr(surname)}`.toLowerCase() }));
		}
	}, [registrationData.name, registrationData.surname]);

	console.log(registrationData);

	return (
		<div className='login__section' style={{ height: `${100}%` }}>
			<div className={styles.login}>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-md-4 offset-md-4'>
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Введите никнейм пользователя
							</label>
							<input type='text' className='form-control' value={userInput} required onChange={(e) => setUserInput(e.target.value)} />
							<label htmlFor='exampleInputEmail1' className='form-label'>
								Введите пароль:
							</label>
							<input type='password' className='form-control' value={userPassword} required onChange={(e) => setUserPassword(e.target.value)} />
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
								navigation
								pagination={{ type: 'fraction' }}
								style={{ height: 400, marginTop: 90 }}
								onSwiper={setSlider}
								onSlideChange={(slider) => (slider?.slides.length - 1 === slider?.realIndex ? setIsLastSlide(true) : setIsLastSlide(false))}>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Введите ваше имя:
									</label>
									<input type='text' value={registrationData.name} required onChange={(e) => setRegistrationData((state) => ({ ...state, name: e.target.value }))} />
								</SwiperSlide>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Введите фамилию:
									</label>
									<input type='text' value={registrationData.surname} required onChange={(e) => setRegistrationData((state) => ({ ...state, surname: e.target.value }))} />
								</SwiperSlide>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Придумайте себе никнейм или воспользуйтесь сгенерированным:
									</label>
									<input type='text' value={registrationData.nickname} required onChange={(e) => setRegistrationData((state) => ({ ...state, nickname: e.target.value }))} />
								</SwiperSlide>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Придумайте пароль:
									</label>
									<input type='text' value={registrationData.password} required onChange={(e) => setRegistrationData((state) => ({ ...state, password: e.target.value }))} />
								</SwiperSlide>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label'>
										Загрузите фотографию:
									</label>
									<input type='file' value={registrationData.image} required onChange={(e) => setRegistrationData((state) => ({ ...state, image: e.target.value }))} />
									<PhotoCameraIcon />
								</SwiperSlide>
								<SwiperSlide>
									<label htmlFor='exampleInputEmail1' className='form-label' style={{ marginLeft: 'auto' }}>
										Добавьте знакомых друзей:
									</label>
									<Swiper navigation slidesPerView={6} style={{ width: `${60}%` }}>
										{serverUsers.map(({ _id, name, surname, photos }) => (
											<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10 }}>
												<div className='friendList__slide'>
													<div
														className={friendClass(_id)}
														style={{ backgroundImage: `url(http://localhost:9000/${photos?.length ? photos[0] : 'image/no-img.png'})` }}
														onClick={() => addFriendHandler(_id)}
													/>
													{name} <br />
													{surname}
												</div>
											</SwiperSlide>
										))}

										<button>Добавить</button>
									</Swiper>
								</SwiperSlide>
								<h2 slot='container-end' style={{ position: 'absolute', zIndex: 100, top: `${2}%`, left: `${50}%`, transform: 'translateX(-50%)' }}>
									Регистрация
								</h2>
								{isLastSlide && (
									<button
										slot='container-end'
										className='btn btn-primary'
										onClick={submitHandler}
										style={{ position: 'absolute', zIndex: 100, bottom: `${2}%`, left: `${50}%`, transform: 'translateX(-50%)' }}>
										Зарегистрироваться
									</button>
								)}
							</Swiper>
						)}
					</div>
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

// {
// 	registration && (
// 		<Swiper
// 			onSlideChange={(swiper) => console.log(swiper.realIndex)}
// 			// slidesPerView={1}
// 			// navigation

// 			pagination={{ type: 'fraction' }}
// 			style={{ height: 400, marginTop: 90 }}
// 			onInit={(swiper) => {
// 				swiper.params.navigation.prevEl = prevBtn.current;
// 				swiper.params.navigation.nextEl = nextBtn.current;
// 				swiper.navigation.init();
// 				swiper.navigation.update();
// 			}}>
// 			<SwiperSlide>
// 				<label htmlFor='exampleInputEmail1' className='form-label'>
// 					Введите ваше имя:
// 				</label>
// 				<input type='text' />
// 			</SwiperSlide>
// 			<SwiperSlide>
// 				<label htmlFor='exampleInputEmail1' className='form-label'>
// 					Введите фамилию:
// 				</label>
// 				<input type='text' />
// 			</SwiperSlide>
// 			{/* <SwiperSlide>
// 						<label htmlFor='exampleInputEmail1' className='form-label'>
// 							Придумайте никнейм пользователя:
// 						</label>
// 						<input type='text' />
// 					</SwiperSlide> */}
// 			<SwiperSlide>
// 				<label htmlFor='exampleInputEmail1' className='form-label'>
// 					Придумайте пароль:
// 				</label>
// 				<input type='text' />
// 			</SwiperSlide>
// 			<SwiperSlide>
// 				<label htmlFor='exampleInputEmail1' className='form-label'>
// 					Загрузите фотографию:
// 				</label>
// 				<input type='file' />
// 				<PhotoCameraIcon />
// 			</SwiperSlide>
// 			<SwiperSlide>
// 				<label htmlFor='exampleInputEmail1' className='form-label' style={{ marginLeft: 'auto' }}>
// 					Добавьте знакомых друзей:
// 				</label>
// 				{/* <Swiper navigation slidesPerView={6} style={{ width: `${60}%` }}>
// 								{serverUsers.map(({ _id, name, surname }) => (
// 									<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10 }}>
// 										<div className='friendList__slide'>
// 											<div className={styles.friendList__slideProfile} />
// 											{name} <br />
// 											{surname}
// 										</div>
// 									</SwiperSlide>
// 								))}

// 								<button>Добавить</button>
// 							</Swiper> */}
// 			</SwiperSlide>
// 			<h2 slot='container-end' style={{ position: 'absolute', zIndex: 100, top: `${2}%`, left: `${50}%`, transform: 'translateX(-50%)' }}>
// 				Регистрация
// 			</h2>
// 			{/* <button ref={prevBtn} style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, left: `${2}%`, transform: 'translateY(-50%)' }}>
// 							Prev
// 						</button> */}
// 			<button slot='container-end' className='btn btn-danger' style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, left: `${2}%`, transform: 'translateY(-50%)' }} ref={prevBtn}>
// 				Назад
// 			</button>
// 			<button slot='container-end' className='btn btn-success' style={{ position: 'absolute', zIndex: 100, bottom: `${20}%`, right: `${2}%`, transform: 'translateY(-50%)' }} ref={nextBtn}>
// 				Дальше
// 			</button>
// 		</Swiper>
// 	);
// }
