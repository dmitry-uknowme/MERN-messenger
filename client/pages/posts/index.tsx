import MainTemplate from '../../templates/MainTemplate';
import PostList from '../../components/PostList';
import axios from 'axios';
import { GetServerSideProps } from 'next';

const PostListPage = ({ posts }) => {
	return (
		<MainTemplate title='Новости'>
			<PostList serverPosts={posts} />
		</MainTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await axios.get(`http://localhost:9000/api/posts`);
	return { props: { posts: data } };
};

export default PostListPage;
