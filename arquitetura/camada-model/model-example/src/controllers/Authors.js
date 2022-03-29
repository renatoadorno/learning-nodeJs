const author = require('../models/Authors');

const authorsGetAll = async (_req, res, _next) => {
  const authors = await author.getAll();
  res.status(200).json(authors);
}

const authorsGetById = async (req, res, next) => {

}

module.exports = {
  authorsGetAll,
  authorsGetById,
}
