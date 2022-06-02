import axios from "axios";
import { NextRouter } from "next/router";
import { Dispatch } from "react";
import { IUser, UserAction, UserActionTypes } from "../../types/user";

export const fetchUser = (payload: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await axios.get(
      `http://localhost:9000/api/users/${payload}`
    );
    dispatch({ type: UserActionTypes.FETCH, payload: response.data });
  };
};
export const loginUser = (
  payload: { username: string; password: string },
  router: NextRouter
) => {
  return async (dispatch: Dispatch<UserAction>) => {
    axios
      .post("http://localhost:9000/api/users/login", payload, {
        // withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        // responseType: "json",
        // timeout: 10000,
        // // withCredentials: true,
        // headers: {
        //   "X-Requested-With": "XMLHttpRequest",
        //   "Content-Type": "application/json",
        // },
      })
      .then((response) => {
        if (response.status === 201) {
          const user = response.data.user as IUser;
          dispatch({ type: UserActionTypes.FETCH, payload: user });
          setTimeout(() => router.push(`/profile/${user.username}`), 500);
        }
      });
    // const response = await axios.get(
    //   `http://localhost:9000/api/users/${payload}`
    // );
  };
};

export const fetchUserChats = (payload: string) => {
  return async (dispatch: Dispatch<UserAction>) => {
    const response = await axios.get(
      `http://localhost:9000/api/users/${payload}/chats`,
      {}
    );
    console.log("user chats", response.data);
    dispatch({ type: UserActionTypes.FETCH_CHATS, payload: response.data });
  };
};

export const addUserFriend = (payload: IUser) => {
  return async (dispatch: Dispatch<UserAction>) => {
    dispatch({ type: UserActionTypes.ADD_FRIEND, payload });
  };
};

export const setUserOnline = (payload: boolean) => {
  return { type: UserActionTypes.SET_ONLINE, payload };
};
