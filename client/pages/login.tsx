import axios from 'axios';
import { GetServerSideProps } from 'next';
import Login from '../components/Login';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchUser } from '../store/action-creators/user';
import FullscreenTemplate from '../templates/FullscreenTemplate';

const LoginPage = ({ users }) => {
	return (
		<FullscreenTemplate title='Вход'>
			<Login serverUsers={users} />
		</FullscreenTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get('http://localhost:9000/api/users');
	return { props: { users: data } };
};

export default LoginPage;
