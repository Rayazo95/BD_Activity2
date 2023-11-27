const Usuario = require('../Models/Usuario.model');

// Agregar un nuevo usuario
const obtenerUsuario = async (req, res) => {
   try {
     const { name, email } = req.body;
     const usuario = new Usuario({ name, email });
     await usuario.save();
     res.status(201).json({ mensaje: 'Usuario agregado correctamente', usuario });
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };
 
 // Buscar usuario por email
 const buscarUsuarioPorEmail = async (req, res) => {
   try {
     const { email } = req.query;
     const usuarioEncontrado = await Usuario.findOne({ email });
     if (!usuarioEncontrado) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado' });
     }
     res.status(200).json(usuarioEncontrado);
   } catch (error) {
     res.status(400).json({ error: error.message, mensaje: 'Error al buscar usuario por email' });
   }
 };
 
 // Borrar usuario por email
 const borrarUsuarioPorEmail = async (req, res) => {
   try {
     const { email } = req.params;
     const usuarioBorrado = await Usuario.findOneAndDelete({ email });
     if (!usuarioBorrado) {
       return res.status(404).json({ mensaje: 'Usuario no encontrado para borrar' });
     }
     res.status(200).json({ mensaje: 'Usuario borrado exitosamente', usuario: usuarioBorrado });
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };

module.exports = { 
   obtenerUsuario, 
   buscarUsuarioPorEmail, 
   borrarUsuarioPorEmail 
};