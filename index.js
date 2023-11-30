const { Sequelize } = require('sequelize');
const UsuariosModel = require('./model/usuario');
const PublicacionesModel = require('./model/publicacion');
const ComentariosModel = require('./model/comentario');

const sequelize = new Sequelize('redsocial_bd', 'root', '123456', {
   host: '127.0.0.1',
   port: 3306,
   dialect: 'mysql',
 });


const Usuarios = UsuariosModel(sequelize, Sequelize);
const Publicaciones = PublicacionesModel(sequelize, Sequelize);
const Comentarios = ComentariosModel(sequelize, Sequelize);


//Relaciones
Usuarios.hasMany(Publicaciones, { foreignKey: 'usuarioId' });
Publicaciones.belongsTo(Usuarios, { foreignKey: 'usuarioId' });

Publicaciones.hasMany(Comentarios, { foreignKey: 'publicacionId' });
Comentarios.belongsTo(Publicaciones, { foreignKey: 'publicacionId' });

Usuarios.hasMany(Comentarios, { foreignKey: 'usuarioId' });
Comentarios.belongsTo(Usuarios, { foreignKey: 'usuarioId' });


module.exports = {
   Usuarios,
   Publicaciones,
   Comentarios,
      sequelize,
    
};