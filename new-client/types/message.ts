import { IUser } from './user';

export interface IMessage {
	_id: number;
	text: string;
	author: IUser;
}
