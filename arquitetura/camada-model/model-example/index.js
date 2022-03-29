const express = require('express')

const author = require('./src/models/Authors');
const book = require('./src/models/Books');

const app = express();
const PORT = 3000;

app.get('/authors', async (req, res) => {
  const authors = await author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (req, res) => {
  const books = await book.getAll();

  res.status(200).json(books);
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
