import express from 'express';
import * as config from '../config.js';

const app = express();

app.get('/', (_req, res) => {
	res.status(200).json({ message: 'worked' });
});

app.listen(config.port(), () => {
	console.log(`listening at http://localhost:${config.port()}`);
})