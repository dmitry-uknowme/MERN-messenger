import axios from 'axios';
import { Dispatch } from 'react';
import { ChatAction, ChatActionTypes } from '../../types/chat';
import { MessagePayload } from '../../types/message';

export const addChatMessage = (payload: MessagePayload) => {
	const { _id, user, text } = payload;
	return async (dispatch: Dispatch<ChatAction>) => {
		const response = await axios.post(`http://localhost:9000/api/chats/${_id}/messages`, { user, text });
		dispatch({ type: ChatActionTypes.ADD_CHAT_MESSAGE, payload: { ...response.data, chatId: _id } });
	};
};

export const fetchChat = (_id: string) => {
	return async (dispatch: Dispatch<ChatAction>) => {
		const response = await axios.get(`http://localhost:9000/api/chats/${_id}`);
		dispatch({ type: ChatActionTypes.FETCH_CHAT, payload: { ...response.data } });
	};
};
