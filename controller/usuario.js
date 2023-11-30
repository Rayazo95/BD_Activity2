const { Usuarios } = require('../index');

const usuariosController = {
  // Agregar Usuario
  async agregarUsuario(req, res) {
    try {
      const { nombre, email } = req.body;
      const nuevoUsuario = await Usuarios.create({ nombre, email });
      res.status(201).json({ mensaje: 'Usuario agregado correctamente', usuario: nuevoUsuario });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar usuario' });
    }
  },

  // Borrar Usuario
  async borrarUsuario(req, res) {
    try {
      const { id } = req.params;
      await Usuarios.destroy({ where: { id } });
      res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar usuario' });
    }
  },

  // Buscar Usuarios por email
  async buscarUsuariosPorEmail(req, res) {
    try {
      const { email } = req.query;
      const usuarios = await Usuarios.findAll({ where: { email } });
      res.status(200).json(usuarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar usuarios por email' });
    }
  },
};

module.exports = usuariosController;