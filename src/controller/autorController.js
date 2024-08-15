import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(_, res) {
    try {
      const autores = await autor.find({});
      res.status(200).json(autores);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar os autores` });
    }
  }

  static async listarAutorById(req, res) {
    try {
      const { id } = req.params;
      const libroById = await autor.findById(id);
      res.status(200).json(libroById);
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao buscar os autores` });
    }
  }

  static async criarAutor(req, res) {
    try{
      const newBook = await autor.create(req.body);
      res.status(201).json({message: 'Autor criado com sucesso', Autor: newBook});
    } catch(error) {
      res.status(500).json({ message: `${error.message} - Falha ao criar o autor` });
    }
  }

  static async editarAutor(req, res) {
    try {
      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: 'Autor atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao Atualizar autor` });
    }
  }

  static async deletarAutor(req, res) {
    try {
      const { id } = req.params;
      await autor.findOneAndDelete(id);
      res.status(200).json({ message: 'Autor Deletado com sucesso' });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar autor` });
    }
  }

};

export default AutorController;