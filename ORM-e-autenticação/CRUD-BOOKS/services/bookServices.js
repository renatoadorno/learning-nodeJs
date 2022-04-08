const { books: BooksModel } = require('../models');

const getAll = async () => {
  // Bônus: Crie uma ordenação no endpoint GET /books para ordenar por ordem alfabética 
  // e por data de criação;
  const results = await BooksModel.findAll({ order: [ ['title', 'ASC'], ['createdAt', 'ASC'] ]});

  return results;
};

const getById = async (id) => {
  const results = await BooksModel.findByPk(id);

  return results;
};

// const createNew = async (title, author, pageQuantity) => {
//   const result = await BooksModel.create({ title, author, pageQuantity });

//   return result;
// };

module.exports = {
  getAll,
  getById,
  // createNew,
}
