import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.sass';
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';

const Sidebar = () => {
  return (
    <nav className="sidebar__section col-md-2 col-sm-3">
      <div className="sidebar">
        <div className="sidebar__item">
          <div className="sidebar__itemText">Мой профиль</div>
          <PersonIcon className="sidebar__itemIcon"></PersonIcon>
        </div>
        <div className="sidebar__item">
          <div className="sidebar__itemText">Новости</div>
          <FiberNewIcon className="sidebar__itemIcon"></FiberNewIcon>
        </div>

        <Link to="/" className="sidebar__item">
          <div className="sidebar__itemText">Сообщения</div>
          <SmsIcon className="sidebar__itemIcon"></SmsIcon>
        </Link>
        <Link to="/friends" className="sidebar__item">
          <div className="sidebar__itemText">Друзья</div>
          <GroupIcon className="sidebar__itemIcon"></GroupIcon>
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
