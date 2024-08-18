
# Curso: Node.js - Criando uma API Rest com Express e MongoDB

Este repositório contém os códigos desenvolvidos durante o curso **Node.js: criando uma API Rest com Express e MongoDB**, realizado na plataforma Alura. O objetivo do curso foi construir uma API do zero seguindo o estilo arquitetural REST e integrá-la com o banco de dados MongoDB e durante o curso de **Node.js: lidando com buscas, filtros, paginação e erros em uma API** criar validações, middlewares, filtros e paginações.

## Plataforma

- **Alura**

## Tópicos Abordados

Neste curso de **Node.js: criando uma API Rest com Express e MongoDB**, foram explorados os seguintes conceitos:

- Aprendizado de como criar uma API REST do zero.
- Compreensão de como funcionam as requisições HTTP.
- Utilização do framework Express para desenvolver aplicações robustas e escaláveis.
- Integração da API com o banco de dados MongoDB.
- Implementação de buscas por campos específicos na API.

Neste outro curso de **Node.js: lidando com buscas, filtros, paginação e erros em uma API**, foram explorados os seguintes conceitos:

- Aprenda a tratar erros de uma API de forma elegante
- Aplique validações do mongoose para garantir dados mais consistentes no MongoDB
- Avance em buscas e filtros e utilize os operadores do MongoDB
- Implemente paginação e reutilize-a em diferentes rotas
- Entenda o que são os middlewares do Express e como eles podem ajudar em todo o desenvolvimento da API

## Estrutura do Código

O código está organizado com foco na criação de uma API para gerenciamento de livros e autores, utilizando MongoDB como banco de dados.

### Funcionalidades Implementadas

- **CRUD de Autores:** Endpoints para listar, criar, editar e deletar autores.
- **CRUD de Livros:** Endpoints para listar, criar, editar e deletar livros, com a possibilidade de buscar livros por editora.
- **Conexão com MongoDB:** Implementação da conexão com o banco de dados usando o Mongoose.
- **Validações:** Validações tanto no mongo.
- **Middlewares:** Middlewares de erros, validações e paginações.

### Exemplos de Uso

#### Listar Todos os Autores

```javascript
routes.get('/autores', AutorController.listarAutores);
```

#### Criar um Novo Livro

```javascript
routes.post('/livros', LivroController.criarLivro);
```

#### Buscar Livros por Editora

```javascript
routes.get('/livros/busca', LivroController.listarLivrosporEditora);
```

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **MongoDB**
- **Mongoose**
- **Dotenv** (para variáveis de ambiente)

## Como Executar o Código

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Configure as variáveis de ambiente:

   Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão com o MongoDB:

   ```
   DB_CONNECTION_STRING=mongodb://seu_usuario:senha@localhost:27017/sua_database
   ```

5. Execute o código:

   ```bash
   npm start
   ```

## Autor

- **Matheus Filho** - [LinkedIn](https://www.linkedin.com/in/matheus-filho-90015917a/) - [GitHub](https://github.com/MatheusRFilho)
