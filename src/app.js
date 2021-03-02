const express = require('express');
const User = require('./user/User');
const app = express();
const bcrypt = require('bcrypt');
app.use(express.json());

app.post('/api/v1/users', async (req, res) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    ...req.body,
    password: hash,
  });

  res.status(201).json({
    success: true,
    message: 'User Created',
  });
});
module.exports = app;
