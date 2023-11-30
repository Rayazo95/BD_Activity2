const { Sequelize } = require('sequelize');
const sequelize = require("../index")

const Usuarios = sequelize.define('Usuarios', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey : true,
    autoIncrement : true
  },
  nombre: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  }
}

);
module.exports = Usuarios;