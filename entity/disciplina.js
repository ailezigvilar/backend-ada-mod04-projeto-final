const DataTypes = require('sequelize');
const sequelize = require('../infra/sequelize')

const Disciplina = sequelize.define('disciplina', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ementa: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numeroCreditos: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  numeroCreditos: {
    type: DataTypes.SMALLINT,
    allowNull: false
  },
  tipo: {
    type: DataTypes.CHAR,
    allowNull: false
  },
  unidadeAcademica: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = Disciplina;