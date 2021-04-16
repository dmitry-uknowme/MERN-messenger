const SET_USER = 'SET_USER';
const SET_IS_ONLINE = 'SET_IS_LOGIN';
const SET_USED_USERS = 'SET_USED_USERS';

const defaulState = {
  isOnline: false,
  data: {},
  usedUsers: [],
};

const userReducer = (state = defaulState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.payload,
      };
    case SET_IS_ONLINE: {
      return {
        ...state,
        isOnline: action.payload,
      };
    }
    case SET_USED_USERS: {
      return {
        ...state,
        usedUsers: [...state.usedUsers, action.payload],
      };
    }
    default:
      return state;
  }
};

export const setUser = (data) => ({ type: SET_USER, payload: data });
export const setIsOnline = (data) => ({ type: SET_IS_ONLINE, payload: data });
export const setUsedUsers = (data) => ({ type: SET_USED_USERS, payload: data });

export default userReducer;
