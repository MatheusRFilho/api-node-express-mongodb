import express from 'express';
import LivroController from '../controller/livroController.js';

const routes = express.Router();

routes.get('/livros', LivroController.listarLivros);
routes.get('/livros/busca', LivroController.listarLivrosporEditora);
routes.get('/livros/:id', LivroController.listarLivrosById);
routes.post('/livros', LivroController.criarLivro);
routes.put('/livros/:id', LivroController.editarLivro);
routes.delete('/livros/:id', LivroController.deletarLivro);

export default routes;