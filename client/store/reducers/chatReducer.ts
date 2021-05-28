import { ChatAction, ChatActionTypes } from '../../types/chat';

const defaultState = {
	chat: {},
};

const chatReducer = (state = defaultState, action: ChatAction) => {
	switch (action.type) {
		case ChatActionTypes.ADD_CHAT_MESSAGE:
			return { ...state, chat: 'chat' };
		// return { ...state.chat, messages: [...state.chat.messages, 'zal'] };
		// return { ...state.chat, messages: action.payload };

		case ChatActionTypes.FETCH_CHAT:
			return action.payload;

		default:
			return state;
	}
};

export default chatReducer;
