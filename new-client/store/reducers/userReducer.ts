import { IUser, UserAction, UserActionTypes } from '../../types/user';

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

const userReducer = (state = defaultState, action: UserAction) => {
	switch (action.type) {
		case UserActionTypes.FETCH_USER:
			return action.payload;
		default:
			return state;
	}
};

export default userReducer