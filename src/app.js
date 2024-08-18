import express from "express";
import dbConnect from "./config/dbConnect.js";
import routes from "./routes/index.js";
import { errorMiddleware } from "./middlewares/handlerError.js";
import handler404 from "./middlewares/handler404.js";

const connect = await dbConnect();

connect.on("error", (erro) => {
  console.log("Erro ao conectar no MongoDB", erro);
});

connect.once("open", () => {
  console.log("Conectado ao MongoDB");
});

const app = express();
routes(app);

app.use(handler404);

app.use(errorMiddleware);

export default app;