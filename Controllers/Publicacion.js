const Publicacion = require('../Models/Publicacion.model');

// Obtener todas las publicaciones
const obtenerPublicaciones = async (req, res) => {
  try {
    const publicaciones = await Publicacion.find().populate('usuario', 'Nombre Email');
    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear una nueva publicación
const crearPublicacion = async (req, res) => {
  const { titulo, contenido, usuario } = req.body;
  try {
    const nuevaPublicacion = await Publicacion.create({ titulo, contenido, usuario });
    res.status(201).json(nuevaPublicacion);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Obtener una publicación por su ID
const obtenerPublicacionPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const publicacion = await Publicacion.findById(id).populate('usuario', 'Nombre Email');
    if (!publicacion) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json(publicacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una publicación por su ID
const actualizarPublicacion = async (req, res) => {
  const { id } = req.params;
  const { titulo, contenido } = req.body;
  try {
    const publicacionActualizada = await Publicacion.findByIdAndUpdate(
      id,
      { titulo, contenido },
      { new: true }
    );
    if (!publicacionActualizada) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json(publicacionActualizada);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Eliminar una publicación por su ID
const eliminarPublicacion = async (req, res) => {
  const { id } = req.params;
  try {
    const publicacionEliminada = await Publicacion.findByIdAndDelete(id);
    if (!publicacionEliminada) {
      return res.status(404).json({ mensaje: 'Publicación no encontrada' });
    }
    res.status(200).json({ mensaje: 'Publicación eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Buscar publicaciones por usuario
const buscarPublicacionesPorUsuario = async (req, res) => {
  const { usuarioId } = req.params;
  try {
    const publicaciones = await Publicacion.find({ usuario: usuarioId }).populate('usuario', 'Nombre Email');
    res.status(200).json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar publicaciones por fecha
const eliminarPublicacionesPorFecha = async (req, res) => {
  const { fecha } = req.body;
  try {
    const resultado = await Publicacion.deleteMany({ fechaCreacion: { $lte: new Date(fecha) } });
    res.status(200).json({ mensaje: `Se eliminaron ${resultado.deletedCount} publicaciones` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  obtenerPublicaciones,
  crearPublicacion,
  obtenerPublicacionPorId,
  actualizarPublicacion,
  eliminarPublicacion,
  buscarPublicacionesPorUsuario,
  eliminarPublicacionesPorFecha,
};