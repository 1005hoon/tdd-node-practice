const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = {
    ...req.body,
    password: hash,
  };

  if (user.username === null) {
    return res.status(400).json({
      success: false,
      message: 'empty username',
    });
  }
  const newUser = await User.create(user);

  res.status(201).json({
    success: true,
    message: 'User Created',
  });
};
