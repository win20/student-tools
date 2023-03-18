import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port = 8080; // default port to listen

import getEligibleUniversities from './controllers/universityController.js';

// define a route handler for the default home page
app.get('/', (req: Request, res: Response) => {
	res.send('Hello world');
});

app.get('/get-elligible-universities', getEligibleUniversities);

// start the Express server
app.listen(port, () => {
	console.log(`server started at http://localhost:${port}`);
});
