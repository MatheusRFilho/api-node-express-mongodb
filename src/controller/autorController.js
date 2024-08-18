import NotFoundError from "../error/NotFound.js";
import { autor } from "../models/index.js";

class AutorController {

  static async listarAutores(req, _, next) {
    try {
      const autores =  autor.find({});
      req.resultado = autores;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async listarAutorById(req, res, next) {
    try {
      const { id } = req.params;
      const libroById = await autor.findById(id);

      if (!libroById) {
        new NotFoundError("Autor não encontrado").sendError(res);
      } else {
        res.status(200).json(libroById);
      }
    } catch (error) {
      next(error);
    }
  }

  static async criarAutor(req, res, next) {
    try{
      const newBook = await autor.create(req.body);
      res.status(201).json({message: "Autor criado com sucesso", Autor: newBook});
    } catch(error) {
      next(error);
    }
  }

  static async editarAutor(req, res, next) {
    try {
      const { id } = req.params;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json({ message: "Autor atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const { id } = req.params;
      await autor.findOneAndDelete(id);
      res.status(200).json({ message: "Autor Deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

};

export default AutorController;