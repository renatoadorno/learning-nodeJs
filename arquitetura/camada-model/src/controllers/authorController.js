const Author = require('../model/authorModel');

const list = async (_req, res, next) => {
  try {
    const authors = await Author.getAll();
    res.status(200).json(authors);
  } catch (e) {
    next(e)
  }
}

const authorsGetById = async (req, res, next) => {
  const { id } = req.params;

  const author = await Author.getById(+id);

  if (!author) return res.status(404).json({ message: 'Not Found' });

  res.status(200).json(author);
}

const authorsPost = async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
      return res.status(400).json({ message: 'Dados inválidos' });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: 'Autor criado com sucesso! '});
}

module.exports = {
  list,
  authorsGetById,
  authorsPost,
}
