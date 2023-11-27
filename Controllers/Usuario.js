const Usuario = require('../Models/Usuario.model');

// Obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
   try {
     const usuarios = await Usuario.find();
     res.status(200).json(usuarios);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 
 // Crear un nuevo usuario
 const crearUsuario = async (req, res) => {
   const { Nombre, Email } = req.body;
   try {
     const nuevoUsuario = await Usuario.create({ Nombre, Email });
     res.status(201).json(nuevoUsuario);
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };
 
 // Obtener un usuario por su ID
 const obtenerUsuarioPorId = async (req, res) => {
   const { id } = req.params;
   try {
     const usuario = await Usuario.findById(id);
     if (!usuario) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
     }
     res.status(200).json(usuario);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 
 // Buscar un usuario por su dirección de correo electrónico (email)
 const buscarUsuarioPorEmail = async (req, res) => {
   const { email } = req.params;
   try {
     const usuario = await Usuario.findOne({ Email: email });
     if (!usuario) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
     }
     res.status(200).json(usuario);
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 
 // Actualizar un usuario por su ID
 const actualizarUsuario = async (req, res) => {
   const { id } = req.params;
   const { Nombre, Email } = req.body;
   try {
     const usuarioActualizado = await Usuario.findByIdAndUpdate(
       id,
       { Nombre, Email },
       { new: true }
     );
     if (!usuarioActualizado) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
     }
     res.status(200).json(usuarioActualizado);
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };
 
 // Eliminar un usuario por su ID
 const eliminarUsuario = async (req, res) => {
   const { id } = req.params;
   try {
     const usuarioEliminado = await Usuario.findByIdAndDelete(id);
     if (!usuarioEliminado) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
     }
     res.status(200).json({ mensaje: 'Usuario eliminado correctamente' });
   } catch (error) {
     res.status(500).json({ error: error.message });
   }
 };
 
 module.exports = {
   obtenerUsuarios,
   crearUsuario,
   obtenerUsuarioPorId,
   buscarUsuarioPorEmail,
   actualizarUsuario,
   eliminarUsuario,
 };