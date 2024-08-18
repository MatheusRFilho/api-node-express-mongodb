import express from "express";
import AutorController from "../controller/autorController.js";
import paginar from "../middlewares/pagination.js";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores, paginar);
routes.get("/autores/:id", AutorController.listarAutorById);
routes.post("/autores", AutorController.criarAutor);
routes.put("/autores/:id", AutorController.editarAutor);
routes.delete("/autores/:id", AutorController.deletarAutor);

export default routes;