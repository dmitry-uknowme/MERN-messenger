import MainTemplate from '../../templates/MainTemplate';
import Chat from '../../components/Chat';
import { useRouter } from 'next/router';

const ChatsPage = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainTemplate title={`Чат № ${id}`}>
			<Chat chatId={id} />
		</MainTemplate>
	);
};

export default ChatsPage;
