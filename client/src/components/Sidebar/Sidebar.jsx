import React from 'react'
import './Sidebar.css'
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className="sidebar__item">
                <div className="sidebar__itemText">My profile</div>
                <PersonIcon className="sidebar__itemIcon"></PersonIcon>
            </div>
            <div className='sidebar__item'>
                <div className="sidebar__itemText">News</div>
                <FiberNewIcon className="sidebar__itemIcon"></FiberNewIcon>
                </div>
                 <div className='sidebar__item'>
                <div className="sidebar__itemText">Messenger</div>
                <SmsIcon className='sidebar__itemIcon'></SmsIcon></div> 
                <div className='sidebar__item'>
                 <div className="sidebar__itemText">Friends</div>
                 <GroupIcon className='sidebar__itemIcon'></GroupIcon>
                </div>
            </div>
    )
}

export default Sidebar
