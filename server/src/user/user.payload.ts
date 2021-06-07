import { ObjectId } from 'mongoose';

export class CreateUserPayload {
  readonly name: string;
  readonly surname: string;
  readonly image?: string;
  readonly friends?: string[];
  readonly nickname?: string;
  readonly password?: string;
}

export class CreateUserChatPayload {
  readonly nickname: string;
  readonly members?: ObjectId[];
}

export class UpdateUserTypePayload {
  readonly friends?: string[];
  readonly audios?: string[];
  readonly photos?: string[];
}
