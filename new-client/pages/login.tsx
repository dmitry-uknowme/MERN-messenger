import Login from '../components/Login';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchUser } from '../store/action-creators/user';
import MainTemplate from '../templates/MainTemplate';

const LoginPage = () => {
	return (
		<MainTemplate>
			<Login />
		</MainTemplate>
	);
};

export default LoginPage;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
	const dispatch = store.dispatch as NextThunkDispatch;
	await dispatch(fetchUser('6091730e46480d0b6c39f6d8'));
});
