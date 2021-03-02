const express = require('express');
const User = require('./user/User');
const app = express();

app.post('/api/v1/users', async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    message: 'User Created',
  });
});
module.exports = app;
