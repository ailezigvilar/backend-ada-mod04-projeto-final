const Sequelize = require('sequelize');

const database = new Sequelize({
  dialect: 'sqlite',
  storage: './database/disciplinas.db',
  logging: false,
});

module.exports = database;