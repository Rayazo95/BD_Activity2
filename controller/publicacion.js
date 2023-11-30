const { sequelize } = require('../index');
const Publicacion = require('../model/publicacion');

const publicacionesController = {
  async agregarPublicacion(req, res) {
    try {
      const { titulo, contenido, fechaCreacion, usuarioId } = req.body;
      const nuevaPublicacion = await Publicacion.create({ titulo, contenido, fechaCreacion, usuarioId }); 
      res.status(201).json({ mensaje: 'Publicación agregada correctamente', publicacion: nuevaPublicacion });
    } catch (error) {
      res.status(500).json({ error: 'Error al agregar publicación' });
    }
  },

  async modificarPublicacion(req, res) {
    try {
      const { id } = req.params;
      const { contenido } = req.body;
      await Publicacion.update({ contenido }, { where: { id } });
      res.status(200).json({ mensaje: 'Contenido de publicación actualizado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar contenido de publicación' });
    }
  },

  async borrarPublicacionPorFecha(req, res) {
    try {
      const { fecha } = req.body;
      await Publicacion.destroy({ where: { fechaCreacion: fecha } });
      res.status(200).json({ mensaje: 'Publicaciones eliminadas correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar publicaciones por fecha' });
    }
  },

  async buscarPublicacionesPorUsuario(req, res) {
    try {
      const { usuarioId } = req.query;
      const publicaciones = await Publicacion.findAll({ where: { usuarioId } });
      res.status(200).json(publicaciones);
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar publicaciones por usuario' });
    }
  },
};

module.exports = publicacionesController;