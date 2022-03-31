const Book = require('../models/Books');

const booksGetAll = async (req, res, _next) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await Book.getByAuthorId(author_id)
  : await Book.getAll();

  res.status(200).json(books);
}

module.exports = {
  booksGetAll
}
