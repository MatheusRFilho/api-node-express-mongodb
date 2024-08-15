import express from "express";
import livros from './livrosRoutes.js'
import autor from './autoresRoutes.js'

const routes = (app) => {
  app.route("/").get((_, res) => res.status(200).send("Bem vindo a API de livros"));
  app.use(express.json(), livros)
  app.use(express.json(), autor)
};

export default routes;	