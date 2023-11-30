const { Comentarios } = require('../index');

const comentariosController = {
  // Agregar Comentario
  async agregarComentario(req, res) {
    try {
      const { contenido, fechaCreacion, publicacionId, usuarioId } = req.body;
      const nuevoComentario = await Comentarios.create({ contenido, fechaCreacion, publicacionId, usuarioId });
      res.status(201).json({ mensaje: 'Comentario agregado correctamente', comentario: nuevoComentario });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar comentario' });
    }
  },

  // Modificar/Actualizar contenido del comentario
  async modificarComentario(req, res) {
    try {
      const { id } = req.params;
      const { contenido } = req.body;
      await Comentarios.update({ contenido }, { where: { id } });
      res.status(200).json({ mensaje: 'Contenido de comentario actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar contenido de comentario' });
    }
  },

  // Borrar comentario por fecha y por publicación
  async borrarComentarioPorFechaYPublicacion(req, res) {
    try {
      const { fecha, publicacionId } = req.body;
      await Comentarios.destroy({ where: { fechaCreacion: fecha, publicacionId } });
      res.status(200).json({ mensaje: 'Comentarios eliminados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar comentarios por fecha y publicación' });
    }
  },

  // Borrar Usuario
  async borrarUsuario(req, res) {
    try {
      const { id } = req.params;
      await Comentarios.destroy({ where: { usuarioId: id } });
      res.status(200).json({ mensaje: 'Comentarios de usuario eliminados correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar comentarios de usuario' });
    }
  },

  // Buscar comentarios por publicación
  async buscarComentariosPorPublicacion(req, res) {
    try {
      const { publicacionId } = req.query;
      const comentarios = await Comentarios.findAll({ where: { publicacionId } });
      res.status(200).json(comentarios);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar comentarios por publicación' });
    }
  },
};

module.exports = comentariosController;