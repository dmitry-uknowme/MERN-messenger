import React from 'react';
import './Sidebar.css';
import PersonIcon from '@material-ui/icons/Person';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SmsIcon from '@material-ui/icons/Sms';
import GroupIcon from '@material-ui/icons/Group';

const Sidebar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__item'>
				<div className='sidebar__itemText'>Мой профиль</div>
				<PersonIcon className='sidebar__itemIcon'></PersonIcon>
			</div>
			<div className='sidebar__item'>
				<div className='sidebar__itemText'>Новости</div>
				<FiberNewIcon className='sidebar__itemIcon'></FiberNewIcon>
			</div>
			<div className='sidebar__item _active'>
				<div className='sidebar__itemText'>Сообщения</div>
				<SmsIcon className='sidebar__itemIcon'></SmsIcon>
			</div>
			<div className='sidebar__item'>
				<div className='sidebar__itemText'>Друзья</div>
				<GroupIcon className='sidebar__itemIcon'></GroupIcon>
			</div>
		</div>
	);
};

export default Sidebar;
