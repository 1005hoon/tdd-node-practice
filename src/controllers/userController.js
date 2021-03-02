const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const validationErrors = {};

    errors.array().forEach((error) => (validationErrors[error.param] = error.msg));
    return res.status(400).json({ validationErrors });
  }
  const hash = await bcrypt.hash(req.body.password, 10);
  const user = {
    ...req.body,
    password: hash,
  };

  const newUser = await User.create(user);

  res.status(201).json({
    success: true,
    message: 'User Created',
  });
};
