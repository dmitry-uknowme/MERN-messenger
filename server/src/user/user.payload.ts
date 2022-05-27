import { ObjectId } from 'mongoose';

export class CreateUserPayload {
  readonly username?: string;
  readonly password?: string;
  readonly first_name: string;
  readonly middle_name: string;
  readonly last_name: string;
  // readonly image?: string;
  // readonly friends?: string[];
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
