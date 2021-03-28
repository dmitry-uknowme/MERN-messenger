const mongoose = require('mongoose');

const connect = () => {
	const mongoURI = 'mongodb+srv://dmitry-admin:LsfBQHca9TJdigf6@cluster0.hrixg.mongodb.net/messenger?retryWrites=true&w=majority';
	mongoose.connect(mongoURI, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	});

	mongoose.connection.once('open', () => {
		console.log('DB connected');
	});
};

module.exports = connect;
