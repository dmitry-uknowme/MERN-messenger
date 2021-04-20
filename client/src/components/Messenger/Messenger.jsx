import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUsedUsers } from '../../reducers/userReducer';
import axios from 'axios';
import AddBoxIcon from '@material-ui/icons/AddBox';
import './Messenger.sass';

const Messenger = () => {
  const dispatch = useDispatch();
  const [userChats, setUserChats] = useState();
  const userData = useSelector((state) => state.user.data);

  const lastMessage = (id) => {
    const currentChat = userChats.find((chat) => chat.id === id);
    return currentChat.messages[currentChat.messages.length - 1].message;
  };

  useEffect(() => {
    setUserChats(userData.chats);
  }, [userData]);

  return (
    <div className="messenger__section col-md-8 offset-md-1 col-sm-9">
      <div className="messenger">
        <div className="col-md-12">
          {userChats ? (
            userChats.map(({ id, name, surname, messages }) => (
              <Link key={id} className="messenger__card-link" to={`chat/${id}`}>
                <div className="card messenger__card">
                  <div className="card-body messenger__card-body">
                    <h5 className="card-title messenger__card-user">
                      {name} {surname}{' '}
                      <span className="messenger__card-user_status">
                        онлайн
                      </span>
                    </h5>

                    <p className="card-text messenger__card-message">
                      {lastMessage(id)}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div>У вас пока нет диалогов</div>
          )}
        </div>
      </div>
      <div className="col-md-4 offset-md-4 d-flex justify-content-center">
        <AddBoxIcon className="messenger__new"></AddBoxIcon>
      </div>
    </div>
  );
};

export default Messenger;
