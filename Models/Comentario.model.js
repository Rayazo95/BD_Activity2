const ComentarioSchema = new mongoose.Schema({

   contenido:String,
   fechaCreacion:Date,
   publicacion:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Publicacion'
   },
   usuario:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Usuario'
   }
   
});

module.exports = mongoose.model.comentario || mongoose.model('comentario',ComentarioSchema);