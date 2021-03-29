const SET_USER = 'SET_USER';
const SET_IS_LOGGED = 'SET_IS_LOGGED';

const defaulState = {
	isLogged: false,
	data: {},
};

const userReducer = (state = defaulState, action) => {
	switch (action.type) {
		case SET_USER:
			return {
				...state,
				data: action.payload,
			};
		case SET_IS_LOGGED: {
			return {
				...state,
				isLogged: action.payload,
			};
		}
		default:
			return state;
	}
};

export const setUser = (data) => ({ type: SET_USER, payload: data });
export const setIsLogged = (data) => ({ type: SET_IS_LOGGED, payload: data });

export default userReducer;
