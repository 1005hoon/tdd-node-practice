const Sequelize = require('sequelize');
const sequelize = require('../config/db');

class User extends Sequelize.Model {}
User.init(
  {
    username: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  { sequelize, modelName: 'User' }
);
module.exports = User;
