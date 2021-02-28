const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.send({ message: "Server Running" });
});

module.exports = app;
