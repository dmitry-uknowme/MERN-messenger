import MainTemplate from '../templates/MainTemplate';
import FriendList from '../components/FriendList';
import { GetServerSideProps } from 'next';
import axios from 'axios';
const FriendListPage = ({ allUsers }) => {
	return (
		<MainTemplate title='Друзья'>
			<FriendList serverAllUsers={allUsers} />
		</MainTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:9000/api/users');
	return { props: { allUsers: data } };
};

export default FriendListPage;
