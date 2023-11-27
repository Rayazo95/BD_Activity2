const ComentarioSchema = new mongoose.Schema(
   {
      contenido: {
        type: String,
        required: [true, "Contenido necesario"],
      },
      fechaCreacion: {
        type: Date,
        default: Date.now,
      },
      publicacion: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Publicacion",
        required: [true, "publicacion necesaria"],
      },
      usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: [true, "Usuario necesario"],
      },
    }
);

module.exports = mongoose.model('Comentario',ComentarioSchema);