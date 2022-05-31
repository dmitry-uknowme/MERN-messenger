import { IChat } from "./chat";

export interface IUser {
  id: string;
  username: string;
  password: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  chats: IChat[];
  friends: IUser[];
  posts: any;
  created_at: string;
  updated_at: string;
}

export enum UserActionTypes {
  FETCH = "FETCH_USER",
  FETCH_ERROR = "FETCH_USER_ERROR",
  ADD_FRIEND = "ADD_FRIEND",
  FETCH_CHATS = "FETCH_USER_CHATS",
  SET_ONLINE = "SET_USER_ONLINE",
}

interface FetchUserAction {
  type: UserActionTypes.FETCH;
  payload: IUser;
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_ERROR;
  payload: string;
}

interface AddFriendAction {
  type: UserActionTypes.ADD_FRIEND;
  payload: IUser;
}

interface FetchUserChatsAction {
  type: UserActionTypes.FETCH_CHATS;
  payload: IChat;
}
interface SetUserOnlineAction {
  type: UserActionTypes.SET_ONLINE;
  payload: boolean;
}

export type UserAction =
  | FetchUserAction
  | FetchUserErrorAction
  | AddFriendAction
  | FetchUserChatsAction
  | SetUserOnlineAction;
