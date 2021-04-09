import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import './Login.sass';

import axios from 'axios';
import { setIsOnline, setUser } from '../../reducers/userReducer';
import socket from '../../utils/socket';

const Login = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const [userInput, setUserInput] = useState('');

	const btnHandler = async () => {
		await axios.get(`/users/${userInput}`).then((response) => dispatch(setUser(response.data)));
		dispatch(setIsOnline(true));

		socket.emit('USER:JOIN', { userId: parseInt(userInput) });
		history.push('/');
	};

	return (
		<div className='login'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-md-4 offset-md-4'>
						<label htmlFor='exampleInputEmail1' className='form-label'>
							Введите id пользователя:
						</label>
						<input type='text' className='form-control' value={userInput} onChange={(e) => setUserInput(e.target.value)} />

						<div className='d-flex justify-content-center mt-3'>
							<button type='submit' className='btn btn-primary' onClick={btnHandler}>
								Войти
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
