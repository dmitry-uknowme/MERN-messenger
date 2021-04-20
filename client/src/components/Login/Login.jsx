import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import {
  setIsOnline,
  setUsedUsers,
  setUserFriends,
  setUser,
  clearUserFriends,
  setUserChats,
} from '../../reducers/userReducer';
import socket from '../../utils/socket';
import './Login.sass';

const Login = () => {
  const userData = useSelector((state) => state.user.data);
  const isOnline = useSelector((state) => state.user.isOnline);
  const dispatch = useDispatch();
  const history = useHistory();
  const [userInput, setUserInput] = useState('');
  const userFriends = userData.friends;
  const userChats = userData.chats;

  useEffect(() => {
    if (isOnline) {
      usedUsersHandler();
    }
  }, [isOnline, userChats, userFriends]);

  const btnHandler = async () => {
    await axios
      .get(`/users/${userInput}`)
      .then((response) => dispatch(setUser(response.data)));
    dispatch(setIsOnline(true));
  };

  const usedUsersHandler = async () => {
    dispatch(clearUserFriends());
    await userFriends.map(async (friend) => {
      await axios.get(`/users/${friend}`).then((response) => {
        // console.log(response.data);
        dispatch(setUserFriends(response.data));
      });
    });

    await userChats.map(async (chat) => {
      await axios.get(`/users/${chat.id}`).then((response) => {
        dispatch(setUserChats({ id: chat.id, data: response.data }));
      });
    });

    await socket.emit('USER:JOIN', { userId: parseInt(userInput) });
    history.push('/friends');
  };

  return (
    <div className="login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Введите id пользователя:
            </label>
            <input
              type="text"
              className="form-control"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />

            <div className="d-flex justify-content-center mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={btnHandler}
              >
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
