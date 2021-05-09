import { ObjectId } from 'mongoose';

export class CreateChatPayload {
  readonly type: string;
  readonly members?: ObjectId[];
}

export class ChangeChatTypePayload {
  readonly type: string;
}
