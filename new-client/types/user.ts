import { IChat } from './chat';

export interface IUser {
	isOnline: boolean;
	isAdmin?: boolean;
	_id: string | null;
	name: string | null;
	surname: string | null;
	nickname: string | null;
	chats: IChat[] | [];
	friends: IUser[] | [];
}

export enum UserActionTypes {
	FETCH_USER = 'FETCH_USER',
	FETCH_USER_ERROR = 'FETCH_USER_ERROR',
	SET_USER_ONLINE = 'SET_USER_ONLINE',
}

interface FetchUserAction {
	type: UserActionTypes.FETCH_USER;
	payload: IUser;
}
interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR;
	payload: string;
}

interface SetUserOnlineAction {
	type: UserActionTypes.SET_USER_ONLINE;
	payload: boolean;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | SetUserOnlineAction;
