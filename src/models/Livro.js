import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  titulo: { type: String, required: [true, "O nome do livro é obrigatório"] },
  editora: { type: String },
  preco: { type: Number },
  // paginas: { type: Number, min: [10, "O número de páginas deve ser maior que 10"], max: [5000, "O número de páginas deve ser menor que 5000"],  },
  paginas: { type: Number, validate: {
    validator:(valor) => { return valor >= 10 && valor <= 5000; },
    message: "O número de páginas deve estar entre 10 e 5000",
  } },
  autor: autorSchema
}, { versionKey: false });


const livro = mongoose.model("livros", livroSchema);

export default livro;