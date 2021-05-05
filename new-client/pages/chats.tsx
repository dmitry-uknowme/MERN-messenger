import SocketService from '../components/socket';
import io from 'socket.io-client';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { NextThunkDispatch, wrapper } from '../store';
import { fetchUser } from '../store/action-creators/user';
//@ts-expect-error
const socket = io('http://localhost:9000');

// const socket = io('http://localhost:9000');
const ChatsPage = () => {
	const user = useTypedSelector((state) => state.user);
	// const [count, setCount] = useState(0);
	// socket.on('connect', function () {
	// 	console.log('Connected 1', socket.id);
	// });
	// socket.on('MESSAGE:SENT', (data) => {
	// 	console.log('message data', data);
	// });
	// const send = () => {
	// 	socket.emit('MESSAGE:SEND', { message: 'rabotaet' });
	// };

	// useEffect(() => {
	// 	console.log('effect');
	// 	socket.on('connect', function () {
	// 		console.log('Connected 1');
	// 	});
	// }, [count]);
	return (
		<div>
			Chats Page <button /* onClick={send} */>Press to send</button>
			{JSON.stringify(user, null, 10)}
		</div>
	);
};

export default ChatsPage;

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
	const dispatch = store.dispatch as NextThunkDispatch;

	await dispatch(fetchUser('6091730e46480d0b6c39f6d8'));
});
