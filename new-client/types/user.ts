import { IChat } from './chat';

export interface IUser {
	isOnline: boolean;
	isAdmin?: boolean;
	_id: number;
	name: string;
	surname: string;
	nickname: string;
	chats: IChat[];
	friends: IUser[];
}
