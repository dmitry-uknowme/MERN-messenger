import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction, UserActionTypes } from '../../types/user';

export const fetchUser = (payload: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		const response = await axios.get(`http://localhost:9000/api/users/${payload}`);
		dispatch({ type: UserActionTypes.FETCH_USER, payload: response.data });
	};
};

export const fetchUserChats = (payload: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		const response = await axios.get(`http://localhost:9000/api/users/${payload}/chats`, {});
		console.log('user chats', response.data);
		dispatch({ type: UserActionTypes.FETCH_USER_CHATS, payload: response.data });
	};
};

export const setUserOnline = (payload: boolean) => {
	return { type: UserActionTypes.SET_USER_ONLINE, payload };
};
