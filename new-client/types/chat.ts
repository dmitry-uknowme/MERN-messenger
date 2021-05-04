import { IMessage } from './message';

export interface IChat {
	_id: number;
	type: string;
	message: IMessage[];
}
