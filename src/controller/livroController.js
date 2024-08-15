import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async listarLivros(_, res) {
    try {
      const livros = await livro.find({});
      res.status(200).json(livros);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar os livros` });
    }
  }

  static async listarLivrosById(req, res) {
    try {
      const { id } = req.params;
      const libroById = await livro.findById(id);
      res.status(200).json(libroById);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar os livros` });
    }
  }

  static async listarLivrosporEditora(req, res) {
    const editora  = req.query.editora;
    try {
      const livroPorEditora = await livro.find({ editora });
      res.status(200).json(livroPorEditora);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar os livros` });
    }
  }

  static async criarLivro(req, res) {

    const newBook = req.body;

    try{
      const autorEncontrado = await autor.findById(newBook.autor);

      const livroCompleto = {
        ...newBook, autor: {...autorEncontrado._doc}
      }

      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: 'Livro criado com sucesso', livro: livroCriado});
    } catch(error) {
      res.status(500).json({ message: `${error.message} - Falha ao criar o livro` });
    }
  }

  static async editarLivro(req, res) {
    const livroParaEditar = req.body;

    const { id } = req.params;
    try {
      const autorEncontrado = await autor.findById(livroParaEditar.autor);

      const livroCompleto = {
        ...livroParaEditar, autor: {...autorEncontrado._doc}
      }

      await livro.findByIdAndUpdate(id, livroCompleto);

      res.status(200).json({ message: 'Livro atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao Atualizar livro` });
    }
  }

  static async deletarLivro(req, res) {
    try {
      const { id } = req.params;
      await livro.findOneAndDelete(id);
      res.status(200).json({ message: 'Livro Deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar livro` });
    }
  }

};

export default LivroController;