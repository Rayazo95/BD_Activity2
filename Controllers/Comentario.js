const Comentario = require('../Models/Comentario.model');

// Obtener comentarios por ID de publicación
const obtenerComentariosPorPublicacion = async (req, res) => {
  const { idPublicacion } = req.params;
  try {
    const comentarios = await Comentario.find({ publicacion: idPublicacion }).populate('usuario', 'Nombre Email').populate('publicacion', 'titulo');
    res.status(200).json(comentarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear un nuevo comentario
const crearComentario = async (req, res) => {
  const { contenido, publicacion, usuario } = req.body;
  try {
    const nuevoComentario = await Comentario.create({ contenido, publicacion, usuario });
    res.status(201).json(nuevoComentario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Actualizar contenido de un comentario por su ID
const actualizarContenidoComentario = async (req, res) => {
  const { id } = req.params;
  const { contenido } = req.body;
  try {
    const comentarioActualizado = await Comentario.findByIdAndUpdate(
      id,
      { contenido },
      { new: true }
    );
    if (!comentarioActualizado) {
      return res.status(404).json({ mensaje: 'Comentario no encontrado' });
    }
    res.status(200).json(comentarioActualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar comentario por fecha y por publicación
const eliminarComentarioPorFechaYPublicacion = async (req, res) => {
  const { fecha, idPublicacion } = req.body;
  try {
    const resultado = await Comentario.deleteMany({ publicacion: idPublicacion, fechaCreacion: { $lte: new Date(fecha) } });
    res.status(200).json({ mensaje: `Se eliminaron ${resultado.deletedCount} comentarios` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerComentariosPorPublicacion,
  crearComentario,
  actualizarContenidoComentario,
  eliminarComentarioPorFechaYPublicacion,
};