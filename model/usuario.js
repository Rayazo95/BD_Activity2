const { DataTypes } = require('sequelize');
const sequelize = require("../index").sequelize;

const Usuarios = (sequelize, DataTypes) => {
  return sequelize.define('Usuarios', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  });
};

module.exports = Usuarios;