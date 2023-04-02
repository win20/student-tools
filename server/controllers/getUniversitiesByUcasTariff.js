const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

const getUniversitiesByUcasTariff = async (req, res) => {
  const ucasTariff = req.query.ucasTariff;
  const client = new DynamoDBClient({ region: "eu-west-2" });
  const command = new ScanCommand({
    ExpressionAttributeNames: {
      "#I": "Institution",
      "#Date": "2023",
      "#AET": "Average entry tariff",
      "#W": "website",
    },
    ExpressionAttributeValues: {
      ":filter": { S: ucasTariff },
    },
    FilterExpression: "#AET < :filter",
    ProjectionExpression: "#I, #Date, #AET, #W",
    TableName: "university-table",
  });
  try {
    const results = await client.send(command);
    return res.status(200).json(results.Items);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getUniversitiesByUcasTariff };
