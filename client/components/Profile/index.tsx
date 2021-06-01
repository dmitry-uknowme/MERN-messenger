import styles from './index.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useRef, useState } from 'react';
import { IUser } from '../../types/user';
import Link from 'next/link';
import SwiperCore, { Virtual, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PostItem from '../PostList/PostItem';

SwiperCore.use([Virtual, Navigation, Scrollbar]);

const Profile = ({ serverProfile }) => {
	const [profile, setProfile] = useState<IUser>(serverProfile);
	const userData = useTypedSelector(({ user }) => user);
	const [slider, setSlider] = useState();
	const nextBtn = useRef(null);
	const prevBtn = useRef(null);

	//wtf dont change state if click from another profile page
	useEffect(() => {
		setProfile(serverProfile);
	}, [serverProfile]);

	return (
		<section className={`${styles.profile__section} col-md-7`}>
			<div className={styles.profile}>
				<div className='col-md-12'>
					<div className='container'>
						<div className='row'>
							<div className='col-md-4'>
								<div className={styles.profile__left}>
									<img className={styles.profile__photo} src='/img/profile.jpg' />
									<div className={styles.profile__btn}>{profile._id === userData._id ? 'Сменить фото' : 'Написать сообщение'}</div>
								</div>
							</div>
							<div className='col-md-8'>
								<div className={styles.profile__right}>
									<div className='profile__info'>
										<div className='profile__header'>
											<h3 className='profile__name'>
												{profile.name} {profile.surname}
											</h3>
										</div>
										<div className={styles.profile__footer}>
											<div className='profile__item'>
												<div className={styles.profile__itemCount}>{profile.friends.length}</div>
												<div className='profile__itemText'>Друзей</div>
											</div>
											<div className='profile__item'>
												<div className={styles.profile__itemCount}>100</div>
												<div className='profile__itemText'>Аудио</div>
											</div>
											<div className='profile__item'>
												<div className={styles.profile__itemCount}>10</div>
												<div className='profile__itemText'>Фото</div>
											</div>
										</div>
									</div>
									<div className='profile__list friendList'>
										<button className='friendList__prev' ref={prevBtn}>
											Назад
										</button>
										<button className='friendList__prev' ref={nextBtn}>
											Вперед
										</button>
										<Swiper
											allowTouchMove={false}
											slidesPerView={4}
											onInit={(swiper) => {
												swiper.params.navigation.prevEl = prevBtn.current;
												swiper.params.navigation.nextEl = nextBtn.current;
												swiper.navigation.init();
												swiper.navigation.update();
											}}>
											{profile.friends.map(({ _id, name, surname, nickname }) => (
												<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10, width: `${25}%` }}>
													<Link href={`/profile/${nickname}`}>
														<div className='friendList__slide'>
															<div className={styles.friendList__slideProfile} />
															{name} <br />
															{surname}
														</div>
													</Link>
												</SwiperSlide>
											))}
										</Swiper>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PostItem text='text' images={[]} />
		</section>
	);
};

export default Profile;
