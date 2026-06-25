const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define a estrutura da tabela 'students' no banco de dados SQL
const Student = sequelize.define('Student', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  course: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false // Desativa as colunas automáticas de 'criado em/atualizado em'
});

module.exports = Student;
