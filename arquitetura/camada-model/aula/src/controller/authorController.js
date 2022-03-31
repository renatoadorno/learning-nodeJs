const Author = require('../model/authorModel');

const list = async (req, res, next) => {
  const authors = Author.getAll();
  
  req.status(200).json(authors);
}

module.exports = {
  list,
}
