const serverless = require("serverless-http");
const express = require("express");
const {
  getDefaultUniversities,
} = require("./controllers/getDefaultUniversities");
const {
  getUniversitiesByUcasTariff,
} = require("./controllers/getUniversitiesByUcasTariff");
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.get("/getDefaultUniversities", getDefaultUniversities);
app.get("/getUniversitiesByUcasTariff", getUniversitiesByUcasTariff);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
