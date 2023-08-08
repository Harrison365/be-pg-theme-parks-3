const { fetchParks } = require("./models");

exports.getHealthCheck = (req, res) => {
  res.status(200).send({ api: "ok" });
};

exports.getParks = (req, res) => {
  console.log("hello");
  fetchParks().then((parks) => {
    res.status(200).send({ parks });
  });
};
