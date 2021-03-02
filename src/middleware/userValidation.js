exports.validateUsername = async (req, res, next) => {
  const user = req.body;
  if (user.username === null) {
    req.validationErrors = {
      ...req.validationErrors,
      username: 'Username cannot be null',
    };
  }
  next();
};

exports.validateEmail = async (req, res, next) => {
  const user = req.body;
  if (user.email === null) {
    req.validationErrors = {
      ...req.validationErrors,
      email: 'Email cannot be null',
    };
  }
  next();
};
