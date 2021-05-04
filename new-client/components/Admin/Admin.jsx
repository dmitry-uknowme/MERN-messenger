import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CodeIcon from '@material-ui/icons/Code';

const Admin = () => {
	const [allUsers, setAllUsers] = useState();
	const [selectedUser, setSelectedUser] = useState();

	const fetchUsers = async () => {
		axios.get('/users').then((response) => {
			setAllUsers(response.data);
			setSelectedUser(allUsers?.find((user) => user.id === 1));
		});
	};

	const selectHandler = (e) => {
		const id = parseInt(e.target.value);
		setSelectedUser(allUsers.find((user) => user.id === id));
	};

	const isObject = (obj) => Object.prototype.toString.call(obj) === '[object Object]';
	const isArray = (arr) => Object.prototype.toString.call(arr) === '[object Array]';

	const containsObject = (target) => {
		if (isObject(target)) {
			if (Object.keys(target).find((key) => isObject(target[key]) === true)) return true;
			else {
				return false;
			}
		} else if (isArray(target)) {
			if (target.find((item) => isObject(item) === true)) return true;
			else {
				return false;
			}
		}
	};

	const containsArray = (target) => {
		if (isObject(target)) {
			if (Object.keys(target).find((key) => isArray(target[key]) === true)) return true;
			else {
				return false;
			}
		} else if (isArray(target)) {
			if (target.find((item) => isArray(item) === true)) return true;
			else {
				return false;
			}
		}
	};

	const Recursion = ({ target }) => (
		<>
			{/* {console.log()} */}
			{!containsArray(target) && !containsObject(target) && !isObject(target) && !isArray(target) ? (
				<>{target}</>
			) : (
				<>
					{Object.keys(target).map((key) =>
						isArray(target[key]) ? (
							target[key].map((subKey) => <Recursion target={subKey}></Recursion>)
						) : isObject(target[key]) ? (
							Object.keys(target[key]).map((subKey) => <Recursion target={subKey}></Recursion>)
						) : (
							<>
								<b>{key}: </b> {target[key]}
								<br />
							</>
						)
					)}
				</>
			)}
		</>
	);

	// if (!containsArray(target) && !containsObject(target)) {
	// 	console.log('target', target);
	// 	return <>target</>;
	// }
	// Object.keys(target).map((key) => {
	// 	if (isArray(target[key])) {
	// 		target[key].map((subKey) => recursion(subKey));
	// 	} else if (isObject(target[key])) {
	// 		Object.keys(target[key]).map((subKey) => recursion(subKey));
	// 	} else {
	// 		return console.log(target[key]);
	// 	}
	// });
	// };
	console.log('-----------------');
	// recursion(selectedUser);

	const renderFields = () =>
		Object.keys(selectedUser).map((userKey) => (
			<div>
				<b>{userKey}: </b>
				{isArray(selectedUser[userKey]) ? (
					selectedUser[userKey].map((subUserItem) => (
						<>
							{isObject(subUserItem) ? (
								<select>
									{Object.keys(subUserItem).map((subUserKey) => (
										<>
											{isArray(subUserItem[subUserKey]) ? (
												''
											) : (
												<option>
													<b>{subUserKey}: </b> {subUserItem[subUserKey]}
												</option>
											)}
										</>
									))}
								</select>
							) : (
								<>jlfk;joaf;lka</>
							)}
						</>
					))
				) : (
					<div>{selectedUser[userKey]}</div>
				)}
			</div>
		));

	// const getTitle = () => <>Админ-панель</>;

	useEffect(() => {
		fetchUsers();
		document.title = `Админ-панель`;
	}, []);
	return (
		<div className='admin__section col-md-8'>
			<div className='admin'>
				<div className='col-md-12'>Админ-панель</div>
				<select onChange={selectHandler}>
					{allUsers?.map(({ id }) => (
						<option>{id}</option>
					))}
				</select>

				{selectedUser && <Recursion target={selectedUser}></Recursion>}
			</div>
		</div>
	);
};

export default Admin;
