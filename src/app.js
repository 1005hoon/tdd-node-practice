const express = require('express');

const app = express();

app.post('/api/v1/users', (req, res) => {
  res.status(201).json({
    success: true,
    message: 'User Created',
  });
});
module.exports = app;
