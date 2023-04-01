import express, { Express, Request, Response } from 'express';
import serverless from 'serverless-http';
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

app.get('/get-elligible-universities', getEligibleUniversities);

app.get('/get-default-universities', getDefaultUniversities);
let env = 'dev';

if (env === 'prod') {
	exports.handler = serverless(app);
} else if (env === 'dev') {
	app.listen(port, () => {
		console.log(`server started at http://localhost:${port}`);
	});
}
