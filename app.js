const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

const bootcampRouter = require("./routes/bootcamps");
app.use(bootcampRouter);

module.exports = app;
