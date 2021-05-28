import { IMessage, MessagePayload } from './message';
import { IUser } from './user';

export interface IChat {
	_id: string;
	type: string;
	messages: IMessage[];
	members?: IUser[];
}

export enum ChatActionTypes {
	FETCH_CHAT = 'FETCH_CHAT',
	ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE',
}

interface SetChatMessagesAction {
	type: ChatActionTypes.FETCH_CHAT;
	payload: IChat;
}
interface AddChatMessageAction {
	type: ChatActionTypes.ADD_CHAT_MESSAGE;
	payload: MessagePayload;
}

export type ChatAction = SetChatMessagesAction | AddChatMessageAction;
