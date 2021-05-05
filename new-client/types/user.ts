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
}

interface FetchUserAction {
	type: UserActionTypes.FETCH_USER;
	payload: IUser;
}
interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_USER_ERROR;
	payload: string;
}

export type UserAction = FetchUserAction | FetchUserErrorAction;
