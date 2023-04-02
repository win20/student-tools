const serverless = require('serverless-http');
const dotenv = require('dotenv');
const express = require('express');
const {
	getDefaultUniversities,
} = require('./controllers/getDefaultUniversities');
const {
	getUniversitiesByUcasTariff,
} = require('./controllers/getUniversitiesByUcasTariff');

dotenv.config();
const app = express();
const port = process.env.PORT | 8080;

app.get('/', (req, res, next) => {
	return res.status(200).json({
		message: 'Hello from root!',
	});
});

app.get('/path', (req, res, next) => {
	return res.status(200).json({
		message: 'Hello from path!',
	});
});

app.get('/getDefaultUniversities', getDefaultUniversities);
app.get('/getUniversitiesByUcasTariff', getUniversitiesByUcasTariff);

app.use((req, res, next) => {
	return res.status(404).json({
		error: 'Not Found',
	});
});

if (process.env.ENV === 'dev') {
	app.listen(port, () => {
		console.log('Server started at http://localhost:' + port);
	});
} else {
	module.exports.handler = serverless(app);
}
