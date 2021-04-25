import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import './Friends.sass';

const Friends = () => {
  const userFriends = useSelector((state) => state.user.data.friends);

  useEffect(() => {
    document.title = 'Друзья';
  }, []);
  return (
    <section className="friends__section col-md-8 col-sm-9">
      <div className="friends">
        <div className="col-md-12">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="friends__search">
                  <SearchIcon className="friends__search-icon" />
                  <input
                    className="friends__search-input"
                    type="text"
                    placeholder="Поиск"
                  />
                </div>
              </div>
            </div>
          </div>
          {userFriends.map(({ name, surname }) => (
            <Link className="messenger__card-link" to="/">
              <div className="card messenger__card">
                <div className="card-body messenger__card-body">
                  <h5 className="card-title messenger__card-user">
                    {name} {surname}{' '}
                    <span className="messenger__card-user_status">онлайн</span>
                  </h5>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Friends;
