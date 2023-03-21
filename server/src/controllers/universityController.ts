import { Request, Response } from 'express';
import { DynamoDBClient, ScanCommand } from '@aws-sdk/client-dynamodb';

const getEligibleUniversities = async (req: Request, res: Response) => {
	const ucasTariff = req.query.ucasTariff as string;

	const client = new DynamoDBClient({ region: 'eu-west-2' });
	const command = new ScanCommand({
		ExpressionAttributeNames: {
			'#I': 'Institution',
			'#Date': '2023',
			'#AET': 'Average entry tariff',
			'#W': 'website',
		},
		ExpressionAttributeValues: {
			':filter': { S: ucasTariff },
		},
		FilterExpression: '#AET < :filter',
		ProjectionExpression: '#I, #Date, #AET, #W',
		TableName: 'university-table',
	});

	try {
		const results = await client.send(command);
		res.send(results.Items);
	} catch (err) {
		console.error(err);
	}
};

export default getEligibleUniversities;
