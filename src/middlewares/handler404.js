import NotFoundError from "../error/NotFound.js";

function handler404(_, __, next) {
  const erro404 = new NotFoundError("Rota não encontrada");
  next(erro404);
}
export default handler404;