const { DataTypes } = require('sequelize');
const { sequelize } = require("../index");

const Publicacion = sequelize.define('Publicacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING
  },
  contenido: {
    type: DataTypes.TEXT
  },
  fechaCreacion: {
    type: DataTypes.DATE
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id'
    }
  }
});

module.exports = Publicacion;