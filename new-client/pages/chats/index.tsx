import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchUser } from '../../store/action-creators/user';
import MainTemplate from '../../templates/MainTemplate';
import ChatList from '../../components/ChatList';

const ChatsPage = () => {
	return (
		<MainTemplate title='Чаты'>
			<ChatList />
		</MainTemplate>
	);
};

export default ChatsPage;

// export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
// 	const dispatch = store.dispatch as NextThunkDispatch;
// 	await dispatch(fetchUser('6091730e46480d0b6c39f6d8'));
// });
