const Usuarios = require("./model/usuario");
const Publicaciones = require("./model/publicacion");
const Comentarios = require("./model/comentario");

Usuarios.hasMany(Publicaciones, { foreignKey: 'usuarioId' });
Publicaciones.belongsTo(Usuarios, { foreignKey: 'usuarioId' });

Publicaciones.hasMany(Comentarios, { foreignKey: 'publicacionId' });
Comentarios.belongsTo(Publicaciones, { foreignKey: 'publicacionId' });

Usuarios.hasMany(Comentarios, { foreignKey: 'usuarioId' });
Comentarios.belongsTo(Usuarios, { foreignKey: 'usuarioId' });