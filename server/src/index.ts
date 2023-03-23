import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8080; // default port to listen

import {
	getEligibleUniversities,
	getDefaultUniversities,
} from './controllers/universityController.js';

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
	res.send('Hello world');
});

app.get('/get-elligible-universities', getEligibleUniversities);

app.get('/get-default-universities', getDefaultUniversities);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
