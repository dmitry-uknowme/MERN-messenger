const SET_USER = 'SET_USER';

const defaulState = {
	isLogged: false,
	data: {},
};

const userReducer = (state = defaulState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				data: action.payload.data,
			};
		default:
			return state;
	}
};

export const setUser = (data) => ({ type: SET_USER, payload: data });

export default userReducer;
