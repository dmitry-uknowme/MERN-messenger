import { io, Socket } from 'socket.io-client';

export default class SocketService {
	private socket: Socket;
	constructor(conn: string) {
		this.socket = io(conn);
	}

	emit(event: string, data: any) {
		this.socket.emit(event, data);
	}
	on(event: string, callback: Function) {
		this.socket.on(event, callback());
	}

	// this.Emmit
}

// const socket = new Socket( 'http://localhost:9000');
