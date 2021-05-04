import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Sidebar.sass';
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';

const Sidebar = () => {
  const isAdmin = useSelector((state) => state.user.isAdmin);
  return (
    <nav className="sidebar__section col-md-3">
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
        {isAdmin && (
          <Link to="/admin" className="sidebar__item">
            <div className="sidebar__itemText">Админ-панель</div>
            <CodeIcon className="sidebar__itemIcon"></CodeIcon>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Sidebar;
