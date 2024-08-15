import express from 'express';
import dbConnect from './config/dbConnect.js';
import routes from './routes/index.js';

const connect = await dbConnect();

connect.on('error', (erro) => {
  console.log('Erro ao conectar no MongoDB', erro);
})

connect.once('open', () => {
  console.log('Conectado ao MongoDB');
})

const app = express();
routes(app);

export default app;