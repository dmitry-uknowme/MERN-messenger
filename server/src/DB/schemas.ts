import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
	id: Number,
	name: String,
	surname: String,
	chats: Array,
});

export const userTable = mongoose.model('users', userSchema);
