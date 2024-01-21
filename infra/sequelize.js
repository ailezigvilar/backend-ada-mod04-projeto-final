const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './infra/disciplinas.db', 
});

module.exports = sequelize;