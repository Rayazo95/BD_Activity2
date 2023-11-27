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
   obtenerUsuario,
   buscarUsuarioPorEmail,
   borrarUsuarioPorEmail
} = require("./Controllers/Usuario")

//ruta get principal
router.get("/", async (req, res) => {
   res.send("Let's build a CRUD API!");
 });

// Rutas para usuarios
router.post('/usuarios',obtenerUsuario);
router.get('/buscarUsuario',buscarUsuarioPorEmail);
router.delete('/borrarUsuario/:email',borrarUsuarioPorEmail);

// Rutas para publicaciones
router.get("/publicaciones", obtenerPublicaciones);
router.post("/publicaciones", crearPublicacion);
router.get("/publicaciones/:id", obtenerPublicacionPorId);
router.put("/publicaciones/:id", actualizarPublicacion);
router.delete("/publicaciones/:id", eliminarPublicacion);
router.get("/publicaciones/usuario/:usuarioId", buscarPublicacionesPorUsuario);
router.delete("/publicaciones/fecha", eliminarPublicacionesPorFecha);

// Rutas para comentarios
router.post("/comentarios", crearComentario);
router.put("/comentarios/:id", actualizarContenidoComentario);
router.get("/comentarios/publicacion/:idPublicacion", obtenerComentariosPorPublicacion);
router.delete("/comentarios/fecha-publicacion", eliminarComentarioPorFechaYPublicacion);

module.exports = router;