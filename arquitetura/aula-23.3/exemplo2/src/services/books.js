const BooksModel = require('../models/books');

const getAll = async () => {
  const books = await BooksModel.getAll();

  return books;
}

const create = async ({ title, released, pages }) => {

  if(!title) return { error: 400, message: 'title é obrigatório'};

  // const book = BooksModel.getByTitle(title);

  // if(book) return { error: 400, message: 'Livro já cadastrado!'}

  const createdBook = await BooksModel.create({ title, released, pages });

  return createdBook;
}

module.exports = { getAll, create }