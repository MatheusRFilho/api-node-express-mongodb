import IncorrectReq from "./IncorrectReq.js";

class ValidationError extends IncorrectReq {
  constructor(erro) {
    const errorMessage = Object.values(erro.errors).map((error) => error.message).join("; ");
    super(`Os seguintes erros foram encontrados: ${errorMessage}` , 400);
  }
}
export default ValidationError;