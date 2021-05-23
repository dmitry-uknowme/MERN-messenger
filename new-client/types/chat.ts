import { IMessage, MessagePayload } from './message';
import { IUser } from './user';

export interface IChat {
	_id: string;
	type: string;
	messages: IMessage[];
	members: IUser[];
}

export enum ChatActionTypes {
	SET_CHAT_MESSAGES = 'SET_CHAT_MESSAGES',
	ADD_CHAT_MESSAGE = 'ADD_CHAT_MESSAGE',
}

interface SetChatMessagesAction {
	type: ChatActionTypes.SET_CHAT_MESSAGES;
	payload: MessagePayload;
}
interface AddChatMessageAction {
	type: ChatActionTypes.ADD_CHAT_MESSAGE;
	payload: MessagePayload;
}

export type ChatAction = SetChatMessagesAction | AddChatMessageAction;
