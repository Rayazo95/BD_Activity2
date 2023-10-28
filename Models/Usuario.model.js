const UsuarioSchema = new mongoose.Schema(
   {
      Nombre:{
         type:String,
         require: true
      },
      email:{
         type: String,
         unique: true,
         require: true
      }
   }
);

module.exports = mongoose.model('Usuario',UsuarioSchema);