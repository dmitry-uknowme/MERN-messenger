import styles from './index.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useEffect, useRef, useState } from 'react';
import { IUser } from '../../types/user';
import Link from 'next/link';
import SwiperCore, { Virtual, Navigation, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import PostItem from '../PostList/PostItem';
import AudioItem from '../AudioList/AudioItem';

SwiperCore.use([Virtual, Navigation, Scrollbar]);

const Profile = ({ serverProfile }) => {
	const [profile, setProfile] = useState<IUser>(serverProfile);
	const userData = useTypedSelector(({ user }) => user);
	const [slider, setSlider] = useState();
	console.log('prof', profile);

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
									<h2 className='profile__name'>
										{profile.name} {profile.surname}
									</h2>
									<img className={styles.profile__photo} src={`http://localhost:9000/${profile.photos[0]}`} />
									<div className={styles.profile__btn}>{profile._id === userData._id ? 'Сменить фото' : 'Написать сообщение'}</div>
								</div>
							</div>
							<div className='col-md-8'>
								<div className={styles.profile__right}>
									<div className='profile__list friendList'>
										<h3>Друзей {profile.friends.length} </h3>
										<Swiper navigation allowTouchMove={false} slidesPerView={4}>
											{profile.friends.map(({ _id, name, surname, nickname, photos }) => (
												<SwiperSlide key={_id} style={{ cursor: 'pointer', padding: 10, width: `${25}%` }}>
													<Link href={`/profile/${nickname}`}>
														<div className='friendList__slide'>
															<div className={styles.friendList__slideProfile} style={{ backgroundImage: `url(http://localhost:9000/${photos[0]})` }} />
															{name} <br />
															{surname}
														</div>
													</Link>
												</SwiperSlide>
											))}
										</Swiper>
										<h3>Фотографий {profile.photos.length} </h3>
										<Swiper navigation allowTouchMove={false} slidesPerView={2}>
											{profile.photos.map((photo) => (
												<SwiperSlide key={photo} style={{ cursor: 'pointer', padding: 10, width: `${25}%` }}>
													<Link href={`http://localhost:9000/${photo}`}>
														<div className={styles.photoList__slide}>
															<div className={styles.photoList__slideImg} style={{ backgroundImage: `url(http://localhost:9000/${photo})` }} />
														</div>
													</Link>
												</SwiperSlide>
											))}
										</Swiper>
										<h3>Аудиозаписей {profile.audios.length} </h3>
										<Swiper navigation allowTouchMove={false} slidesPerView={4}>
											{profile.audios.map((audio) => (
												<SwiperSlide key={audio._id} style={{ cursor: 'pointer', padding: 10, width: `${25}%` }}>
													<Link href={`http://localhost:9000/${audio.sound}`}>
														<div className={styles.photoList__slide}>
															<AudioItem audio={audio} height={100} />
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
			{profile.posts.map((post) => (
				<PostItem post={post} />
			))}
		</section>
	);
};

export default Profile;
