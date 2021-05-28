import io from 'socket.io-client';
//@ts-expect-error
const socket = io('http://localhost:9000');

export default socket;
