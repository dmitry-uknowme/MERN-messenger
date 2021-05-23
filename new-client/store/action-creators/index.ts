import * as UserActionCreators from './user';
import * as ChatActionCreators from './chat';

export default {
	...UserActionCreators,
	...ChatActionCreators,
};
