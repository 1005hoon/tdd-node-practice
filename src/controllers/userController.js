const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
  if (req.validationErrors) {
    const validationErrors = { ...req.validationErrors };
    return res.status(400).json({
      success: false,
      validationErrors,
    });
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
