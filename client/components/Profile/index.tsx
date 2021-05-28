const Profile = () => {
	return (
		<section className={`profile__section col-md-5 offset-md-1`}>
			<div className='profile'>
				<div className='profile__left'>
					<img className='profile__photo' src='/img/profile.jpg' />
					<div className='profile__message'>Написать</div>
				</div>
				<div className='profile__right'>
					<div className='profile__info'></div>
				</div>
			</div>
		</section>
	);
};

export default Profile;
