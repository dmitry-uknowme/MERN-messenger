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
	photos: string[];
	posts: any[];
	audios: any[];
}

export enum UserActionTypes {
	FETCH = 'FETCH_USER',
	FETCH_ERROR = 'FETCH_USER_ERROR',
	ADD_FRIEND = 'ADD_FRIEND',
	FETCH_CHATS = 'FETCH_USER_CHATS',
	SET_ONLINE = 'SET_USER_ONLINE',
}

interface FetchUserAction {
	type: UserActionTypes.FETCH;
	payload: IUser;
}
interface FetchUserErrorAction {
	type: UserActionTypes.FETCH_ERROR;
	payload: string;
}

interface AddFriendAction {
	type: UserActionTypes.ADD_FRIEND;
	payload: IUser;
}

interface FetchUserChatsAction {
	type: UserActionTypes.FETCH_CHATS;
	payload: IChat;
}
interface SetUserOnlineAction {
	type: UserActionTypes.SET_ONLINE;
	payload: boolean;
}

export type UserAction = FetchUserAction | FetchUserErrorAction | AddFriendAction | FetchUserChatsAction | SetUserOnlineAction;
