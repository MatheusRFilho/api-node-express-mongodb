import mongoose from "mongoose";
import BaseError from "../error/BaseError.js";
import IncorrectReq from "../error/IncorrectReq.js";
import ValidationError from "../error/validateError.js";

// eslint-disable-next-line no-unused-vars
function errorMiddleware(erro, _req, res, _next) {
  if (erro instanceof mongoose.Error.CastError) {
    new IncorrectReq().sendError(res);
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ValidationError(erro).sendError(res);
  } else if (erro instanceof BaseError) {
    erro.sendError(res);
  }else {
    new BaseError().sendError(res);
  }
}

export { errorMiddleware };