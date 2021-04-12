import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams, history, useHistory } from 'react-router-dom';
import socket from '../../utils/socket';
import SendIcon from '@material-ui/icons/Send';
import './Chat.sass';

const Chat = () => {
  const { id } = useParams();
  const history = useHistory();
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState('');
  const userData = useSelector((state) => state.user.data);

  const userChats = userData.chats;

  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit('MESSAGE:SEND', {
      message: { isMy: true, message, hash: `${Date.now()}.${message}` },
      userId: userData.id,
      chatId: parseInt(id),
    });
    setChatMessages((state) => [...state, { isMy: true, message }]);
  };
  useEffect(() => {
    socket.on('MESSAGE:SENT', (data) => {
      console.log('message data', data);
      setChatMessages((state) => [
        ...state,
        { isMy: false, message: data.message.message },
      ]);
    });
    for (const chat of userChats) {
      if (chat.id === parseInt(id)) {
        setChatMessages(chat.messages);
      }
    }
  }, []);

  return (
    <section className="chat__section col-md-8 offset-md-1">
      <div className="chat">
        <div className="chat__header">Имя Фамилия</div>
        <div className="chat__messages">
          {chatMessages?.map((messages) => (
            <>
              {messages.isMy ? (
                <div
                  className="chat__message chat__message-from"
                  key={messages.message}
                >
                  {messages.message}
                </div>
              ) : (
                <div
                  className="chat__message chat__message-to"
                  key={messages.message}
                >
                  {messages.message}
                </div>
              )}
            </>
          ))}
          <br />
        </div>
        <div className="chat__input">
          <textarea
            className="chat__input-area"
            type="text"
            placeholder="Введите сообщение"
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendIcon
            type="button"
            className="chat__input-send"
            onClick={sendMessage}
          ></SendIcon>
        </div>
      </div>
    </section>
  );
};

export default Chat;
