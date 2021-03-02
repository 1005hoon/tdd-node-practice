const Sequelize = require('sequelize');

const sequelize = new Sequelize('hoaxify', 'test-user', 'test-user-pw', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.eports = sequelize;
