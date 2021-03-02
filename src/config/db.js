const Sequelize = require('sequelize');

const sequelize = new Sequelize('tddApp', 'testuser', 'userpw', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelize;
