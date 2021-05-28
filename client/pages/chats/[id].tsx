import MainTemplate from '../../templates/MainTemplate';
import Chat from '../../components/Chat';
import { useRouter } from 'next/router';
import { NextThunkDispatch, wrapper } from '../../store';
import { fetchChat } from '../../store/action-creators/chat';
import { GetServerSideProps } from 'next';
import axios from 'axios';

const ChatsPage = ({ serverChat }) => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<MainTemplate title={`Чат № ${id}`}>
			<Chat serverChat={serverChat} />
		</MainTemplate>
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const { id } = params;
	const { data } = await axios.get(`http://localhost:9000/api/chats/${id}`);
	return { props: { serverChat: data } };
};
// export const getServerSideProps = wrapper.getServerSideProps(async (context: any) => {
// 	const { id } = context.query;
// 	const dispatch = context.store.dispatch as NextThunkDispatch;
// 	await dispatch(fetchChat(id));
// });

export default ChatsPage;
