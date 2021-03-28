const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
	id: Number,
	name: String,
	surname: String,
});

const userTable = mongoose.model('users', userSchema);

module.exports = {
	userTable,
};
