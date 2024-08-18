import BaseError from "./BaseError.js";

class NotFoundError extends BaseError {
  constructor(message= "O item não foi encontrado") {
    super(message, 404);
  }
}
export default NotFoundError;