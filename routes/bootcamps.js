const express = require("express");
const router = express.Router();

router.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show all bootcamps",
  });
});

router.post("/api/v1/bootcamps", (req, res) => {
  res.status(201).json({
    success: true,
    message: "Create new bootcamp",
  });
});

router.get("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Show bootcamp with id ${bootcampId}`,
  });
});

router.put("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Update bootcamp with id ${bootcampId}`,
  });
});

router.delete("/api/v1/bootcamps/:id", (req, res) => {
  const bootcampId = req.params.id;

  res.status(200).json({
    success: true,
    message: `Delete bootcamp with id ${bootcampId}`,
  });
});

module.exports = router;
