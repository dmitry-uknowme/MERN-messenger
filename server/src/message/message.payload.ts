import { ObjectId } from 'mongoose';

export class CreateMessagePayload {
  readonly user: ObjectId;
  readonly text: string;
}
