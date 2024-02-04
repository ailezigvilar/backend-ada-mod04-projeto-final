const DataTypes = require('sequelize');
const sequelize = require('../database/database')

const Disciplina = sequelize.define('disciplinas', {
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
  cargaHoraria: {
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
  caminhoImagem: {
    type: DataTypes.STRING,
    allowNull: true
  },
});

module.exports = Disciplina;