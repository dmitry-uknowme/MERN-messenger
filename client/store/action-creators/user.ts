import axios from 'axios';
import { Dispatch } from 'react';
import { IUser, UserAction, UserActionTypes } from '../../types/user';

export const fetchUser = (payload: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		const response = await axios.get(`http://localhost:9000/api/users/${payload}`);
		dispatch({ type: UserActionTypes.FETCH, payload: response.data });
	};
};

export const fetchUserChats = (payload: string) => {
	return async (dispatch: Dispatch<UserAction>) => {
		const response = await axios.get(`http://localhost:9000/api/users/${payload}/chats`, {});
		console.log('user chats', response.data);
		dispatch({ type: UserActionTypes.FETCH_CHATS, payload: response.data });
	};
};

export const addUserFriend = (payload: IUser) => {
	return async (dispatch: Dispatch<UserAction>) => {
		dispatch({ type: UserActionTypes.ADD_FRIEND, payload });
	};
};

export const setUserOnline = (payload: boolean) => {
	return { type: UserActionTypes.SET_ONLINE, payload };
};
