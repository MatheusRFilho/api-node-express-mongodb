import { livro, autor } from "../models/index.js";
import NotFoundError from "../error/NotFound.js";

class LivroController {

  static async listarLivros(req, _, next) {
    try {
      const buscaLivros = livro.find();
      req.resultado = buscaLivros;
      next();
    } catch (error) {
      next(error);
    }
  }

  static async listarLivrosById(req, res, next) {
    try {
      const { id } = req.params;
      const libroById = await livro.findById(id);

      if (!libroById) {
        new NotFoundError("Livro não encontrado").sendError(res);
      } else {
        res.status(200).json(libroById);
      }

    } catch (error) {
      next(error);

    }
  }

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livro
          .find(busca)
          .populate("autor");

        req.resultado = livrosResultado;

        next();
      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };


  static async criarLivro(req, res, next) {

    const newBook = req.body;

    try{
      const autorEncontrado = await autor.findById(newBook.autor);

      const livroCompleto = {
        ...newBook, autor: {...autorEncontrado._doc}
      };

      const livroCriado = await livro.create(livroCompleto);
      res.status(201).json({message: "Livro criado com sucesso", livro: livroCriado});
    } catch(error) {
      next(error);
    }
  }

  static async editarLivro(req, res, next) {
    const livroParaEditar = req.body;

    const { id } = req.params;
    try {
      const autorEncontrado = await autor.findById(livroParaEditar.autor);

      const livroCompleto = {
        ...livroParaEditar, autor: {...autorEncontrado._doc}
      };

      await livro.findByIdAndUpdate(id, livroCompleto);

      res.status(200).json({ message: "Livro atualizado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const { id } = req.params;
      await livro.findOneAndDelete(id);
      res.status(200).json({ message: "Livro Deletado com sucesso" });
    } catch (error) {
      next(error);
    }
  }

};

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  if (editora) busca.editora = editora;
  if (titulo) busca.titulo = { $regex: titulo, $options: "i" };

  if (minPaginas || maxPaginas) busca.numeroPaginas = {};

  // gte = Greater Than or Equal = Maior ou igual que
  if (minPaginas) busca.numeroPaginas.$gte = minPaginas;
  // lte = Less Than or Equal = Menor ou igual que
  if (maxPaginas) busca.numeroPaginas.$lte = maxPaginas;

  if (nomeAutor) {
    const autor = await autor.findOne({ nome: nomeAutor });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;