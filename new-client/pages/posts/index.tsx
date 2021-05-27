import MainTemplate from '../../templates/MainTemplate';
import PostList from '../../components/PostList';

const PostListPage = () => {
	return (
		<MainTemplate title='Новости'>
			<PostList />
		</MainTemplate>
	);
};

export default PostListPage;
