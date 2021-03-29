import express, {Request,Response}  from 'express';
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);


const port = process.env.PORT || 9000;

app.get('/', async (req:Request, res:Response) => {
	res.send('salam')
});


server.listen(port, () => console.log(`Listening on port ${port}`));
