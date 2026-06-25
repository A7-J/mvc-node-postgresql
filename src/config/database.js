const { Sequelize } = require('sequelize');

// Configura os parâmetros de acesso ao contêiner do PostgreSQL
const sequelize = new Sequelize('escola_mvc', 'arthur', '123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Desativa os logs repetitivos de SQL no terminal
});

module.exports = sequelize;
