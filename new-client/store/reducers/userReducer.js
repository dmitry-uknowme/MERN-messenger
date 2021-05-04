const SET_USER = 'SET_USER';
const SET_IS_ONLINE = 'SET_IS_LOGIN';
const SET_USER_FRIENDS = 'SET_USER_FRIENDS';
const CLEAR_USER_FRIENDS = 'CLEAR_USER__FRIENDS';
const SET_USER_CHATS = 'SET_USER_CHATS';

const defaulState = {
  isOnline: false,
  isAdmin: true,
  data: {},
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

    case SET_USER_FRIENDS: {
      return {
        ...state,
        data: {
          ...state.data,
          friends: [...state.data.friends, action.payload],
        },
      };
    }
    case CLEAR_USER_FRIENDS: {
      return {
        ...state,
        data: {
          ...state.data,
          friends: [],
        },
      };
    }
    case SET_USER_CHATS: {
      Object.assign(
        state.data.chats.find((chat) => chat.id === action.payload.id),
        action.payload.data
      );
    }

    default:
      return state;
  }
};

export const setUser = (data) => ({ type: SET_USER, payload: data });
export const setIsOnline = (data) => ({ type: SET_IS_ONLINE, payload: data });
export const setUserFriends = (data) => ({
  type: SET_USER_FRIENDS,
  payload: data,
});
export const clearUserFriends = () => ({
  type: CLEAR_USER_FRIENDS,
});

export const setUserChats = (data) => ({ type: SET_USER_CHATS, payload: data });

export default userReducer;
