import { IUser } from './user';

export interface IMessage {
	_id: number;
	text: string;
	user: IUser;
}

export interface MessagePayload {
	_id: string;
	chatId?: string;
	user: string;
	text: string;
}
