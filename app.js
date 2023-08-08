const express = require("express");
const app = express();
const { getHealthCheck, getParks } = require("./controllers");

app.get("/api/healthcheck", getHealthCheck);

app.get("/api/parks", getParks);

module.exports = app;
