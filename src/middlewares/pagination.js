import IncorrectReq from "../error/IncorrectReq.js";

async function paginar(req, res, next) {
  try {
    if (!req.resultado) {
      throw new Error("O objeto 'req.resultado' não está definido. Verifique o middleware anterior.");
    }

    let { limite = 5, pagina = 1, campoOrdenacao = "_id", ordem = -1 } = req.query;

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    if (limite > 0 && pagina > 0) {
      const totalItens = await req.resultado.model.countDocuments(req.resultado.getQuery());

      const totalPaginas = Math.ceil(totalItens / limite);

      const resultadoPaginado = await req.resultado
        .find({})
        .sort({ [campoOrdenacao]: ordem })
        .skip(limite * (pagina - 1))
        .limit(limite);

      res.status(200).json({
        data: resultadoPaginado,
        paginaAtual: pagina,
        totalPaginas: totalPaginas,
        totalItens: totalItens,
        itensPorPagina: limite
      });
    } else {
      new IncorrectReq("Parâmetros inválidos").sendError(res);
    }
  } catch (error) {
    next(error);
  }
}

export default paginar;
