const router = require("express").Router();

//para comentario
const {
   obtenerComentariosPorPublicacion,
   crearComentario,
   actualizarContenidoComentario,
   eliminarComentarioPorFechaYPublicacion,
} = require("./Controllers/Comentario");


//para publicacion
const {
   obtenerPublicaciones,
   crearPublicacion,
   obtenerPublicacionPorId,
   actualizarPublicacion,
   eliminarPublicacion,
   buscarPublicacionesPorUsuario,
   eliminarPublicacionesPorFecha
} = require("./Controllers/Publicacion");

//para usuario
const {
   obtenerUsuarios,
   crearUsuario,
   obtenerUsuarioPorId,
   buscarUsuarioPorEmail,
   actualizarUsuario,
   eliminarUsuario
} = require("./Controllers/Usuario")


// Rutas para usuarios
router.get('/usuarios', obtenerUsuarios);
router.post('/usuarios', crearUsuario);
router.get('/usuarios/:id', obtenerUsuarioPorId);
router.get('/usuarios/email/:email', buscarUsuarioPorEmail);
router.put('/usuarios/:id', actualizarUsuario);
router.delete('/usuarios/:id', eliminarUsuario);

// Rutas para publicaciones
router.get('/publicaciones', obtenerPublicaciones);
router.post('/publicaciones', crearPublicacion);
router.get('/publicaciones/:id', obtenerPublicacionPorId);
router.put('/publicaciones/:id', actualizarPublicacion);
router.delete('/publicaciones/:id', eliminarPublicacion);
router.get('/publicaciones/usuario/:usuarioId', buscarPublicacionesPorUsuario);
router.delete('/publicaciones/fecha', eliminarPublicacionesPorFecha);

// Rutas para comentarios
router.get('/comentarios', obtenerComentarios);
router.post('/comentarios', crearComentario);
router.get('/comentarios/:id', obtenerComentarioPorId);
router.put('/comentarios/:id', actualizarContenidoComentario);
router.delete('/comentarios/:id', eliminarComentario);
router.get('/comentarios/publicacion/:idPublicacion', obtenerComentariosPorPublicacion);
router.delete('/comentarios/fecha-publicacion', eliminarComentarioPorFechaYPublicacion);

module.exports = router;