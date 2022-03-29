const Author = require('../models/Authors');

const authorsGetAll = async (_req, res, _next) => {
  const authors = await Author.getAll();
  res.status(200).json(authors);
}

const authorsGetById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.findById(+id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(author);
}

module.exports = {
  authorsGetAll,
  authorsGetById,
}
