const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
});

app.post("/api/v1/bootcamps", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Create new bootcamp",
  });
});

app.get("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Show bootcamp with id ${bootcampId}`,
  });
});

app.put("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Update bootcamp with id ${bootcampId}`,
  });
});

app.delete("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Delete bootcamp with id ${bootcampId}`,
  });
});

module.exports = app;
