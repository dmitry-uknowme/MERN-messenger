import React, { useEffect, useState } from 'react';
import styles from './login.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';
import { setUserOnline } from '../../store/action-creators/user';
import { useRouter } from 'next/router';

const Login = () => {
	const router = useRouter();
	const { fetchUser } = useActions();
	const [userInput, setUserInput] = useState('nikita-bayderin');
	const userData = useTypedSelector((state) => state.user);
	const btnHandler = async () => {
		await fetchUser(userInput);
		await setUserOnline(true);
		router.push('/chats');
	};

	// useEffect(() => {
	// 	if (isOnline) {
	// 		usedUsersHandler();
	// 	}
	// }, [isOnline, userChats, userFriends]);

	// const btnHandler = async () => {
	// 	await axios.get(`/users/${userInput}`).then((response) => dispatch(setUser(response.data)));
	// 	dispatch(setIsOnline(true));
	// };

	// const usedUsersHandler = async () => {
	// 	dispatch(clearUserFriends());
	// 	await userFriends.map(async (friend) => {
	// 		await axios.get(`/users/${friend}`).then((response) => {
	// 			// console.log(response.data);
	// 			dispatch(setUserFriends(response.data));
	// 		});
	// 	});

	// 	await userChats.map(async (chat) => {
	// 		await axios.get(`/users/${chat.id}`).then((response) => {
	// 			dispatch(setUserChats({ id: chat.id, data: response.data }));
	// 		});
	// 	});

	// 	await socket.emit('USER:JOIN', { userId: parseInt(userInput) });
	// 	history.push('/friends');
	// };

	return (
		<div className={styles.login}>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-4 offset-md-4'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Введите никнейм пользователя:
						</label>
						<input type='text' className='form-control' value={userInput} onChange={(e) => setUserInput(e.target.value)} />

						<div className='d-flex justify-content-center mt-3'>
							<button type='submit' className='btn btn-primary' onClick={btnHandler}>
								Войти
							</button>
						</div>
						{JSON.stringify(userData)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
