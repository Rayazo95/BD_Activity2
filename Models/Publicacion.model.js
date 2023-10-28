const publicacionSchema = new mongoose.Schema({

   titulo:String,
   contenido:String,
   fechaCreacion:Date,
   usuario:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'Usuario'
   }

});

module.exports = mongoose.model('Publicacion',publicacionSchema);