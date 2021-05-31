import { ChatAction, ChatActionTypes } from '../../types/chat';
import { UserAction, UserActionTypes } from '../../types/user';

const defaultState = {
	isOnline: false,
	isAdmin: true,
	_id: null,
	name: null,
	surname: null,
	nickname: null,
	friends: [],
	chats: [],
};

const userReducer = (state = defaultState, action: UserAction | ChatAction) => {
	switch (action.type) {
		case UserActionTypes.FETCH:
			return action.payload;

		case UserActionTypes.FETCH_CHATS:
			return { ...state, chats: action.payload };

		case UserActionTypes.SET_ONLINE:
			return { ...state, isOnline: action.payload };

		case UserActionTypes.ADD_FRIEND:
			return { ...state, chats: [...state.chats, action.payload] };

		// case ChatActionTypes.SET_CHAT_MESSAGES:
		// 	return {
		// 		...state,
		// 		chats: action.payload,
		// 	};

		// case ChatActionTypes.ADD_CHAT_MESSAGE:
		// 	return {
		// 		...state,
		// 		chats: state.chats.map((chat) => (chat._id === action.payload.chatId ? { ...chat, messages: [...chat.messages, action.payload] } : '')),
		// 	};

		default:
			return state;
	}
};

export default userReducer;
