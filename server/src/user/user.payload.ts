import { ObjectId } from 'mongoose';

export class CreateUserPayload {
  readonly name: string;
  readonly surname: string;
}

export class CreateUserChatPayload {
  readonly nickname: string;
  readonly members?: ObjectId[];
}
