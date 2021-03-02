const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.createUser = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10);

  const user = await User.create({
    ...req.body,
    password: hash,
  });

  res.status(201).json({
    success: true,
    message: 'User Created',
  });
};
