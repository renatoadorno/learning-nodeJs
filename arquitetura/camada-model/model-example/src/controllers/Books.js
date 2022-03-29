const book = require('../models/Books');

const booksGetAll = async (_req, res, _next) => {
  const books = await book.getAll();
  res.status(200).json(books);
}

module.exports = {
  booksGetAll,
}
