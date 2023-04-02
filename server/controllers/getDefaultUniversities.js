const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");
const getDefaultUniversities = async (req, res) => {
  const client = new DynamoDBClient({ region: "eu-west-2" });
  const command = new ScanCommand({
    ExpressionAttributeNames: {
      "#ID": "id",
      "#I": "Institution",
      "#Date": "2023",
      "#AET": "Average entry tariff",
      "#W": "website",
    },
    ExpressionAttributeValues: {
      ":filter": { S: "5" },
    },
    FilterExpression: "#ID < :filter",
    ProjectionExpression: "#ID, #I, #Date, #AET, #W",
    TableName: "university-table",
    Limit: 10,
  });
  try {
    const results = await client.send(command);
    return res.status(200).json(results.Items);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getDefaultUniversities };
