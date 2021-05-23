import { useTypedSelector } from '../../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchUserChats } from '../../store/action-creators/user';
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
