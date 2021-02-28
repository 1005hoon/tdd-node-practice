const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

const bootcampRouter = require("./routes/bootcamps");
app.use("/api/v1/bootcamps", bootcampRouter);

module.exports = app;
