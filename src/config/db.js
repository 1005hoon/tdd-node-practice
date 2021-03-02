const Sequelize = require('sequelize');

const sequelize = new Sequelize('tddApp', 'testuser', 'userpw', {
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false,
});

module.exports = sequelize;
