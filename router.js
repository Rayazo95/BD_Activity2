const express = require('express');
const router = express.Router();

//para usuario
const usuariosController = require('./controller/usuario');

//para publicacion
const publicacionesController = require('./controller/publicacion');

//para comentario
const comentariosController = require('./controller/comentario');


//para usuario
router.post('/usuarios', usuariosController.agregarUsuario);
router.delete('/usuarios/:id', usuariosController.borrarUsuario);
router.get('/usuarios/buscar', usuariosController.buscarUsuariosPorEmail);

//para publicacion
router.post('/publicaciones', publicacionesController.agregarPublicacion);
router.put('/publicaciones/:id', publicacionesController.modificarPublicacion);
router.delete('/publicaciones', publicacionesController.borrarPublicacionPorFecha);
router.get('/publicaciones/buscar', publicacionesController.buscarPublicacionesPorUsuario);

//para comentario
router.post('/comentarios', comentariosController.agregarComentario);
router.put('/comentarios/:id', comentariosController.modificarComentario);
router.delete('/comentarios', comentariosController.borrarComentarioPorFechaYPublicacion);
router.delete('/comentarios/usuario/:id', comentariosController.borrarUsuario);
router.get('/comentarios/buscar', comentariosController.buscarComentariosPorPublicacion);

module.exports = router;