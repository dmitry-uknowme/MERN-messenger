import React, { useEffect, useState } from 'react';
import styles from './login.module.sass';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import useActions from '../../hooks/useActions';

import { useRouter } from 'next/router';

const Login = () => {
	const router = useRouter();
	const { fetchUser, addChatMessage, setUserOnline } = useActions();
	const [userInput, setUserInput] = useState('dima-bogatyrev');
	const userData = useTypedSelector((state) => state.user);
	const btnHandler = async () => {
		await fetchUser(userInput);

		await setUserOnline(true);
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
