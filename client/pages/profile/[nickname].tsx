import MainTemplate from '../../templates/MainTemplate';
import Profile from '../../components/Profile';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const PostListPage = ({ serverProfile }) => {
	return (
		<MainTemplate title='Профиль'>
			<Profile serverProfile={serverProfile} />
		</MainTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { nickname } = params;
	const { data } = await axios.get(`http://localhost:9000/api/users/${nickname}`);
	return { props: { serverProfile: data } };
};

export default PostListPage;
