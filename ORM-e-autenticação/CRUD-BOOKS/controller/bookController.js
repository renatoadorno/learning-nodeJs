const BookService = require('../services/bookServices');
const { books: BooksModel } = require('../models');

const getAll = async (req, res, next) => {
  try {
    const result = await BookService.getAll();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(id);

    res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
};


// refatorar apartir daqui ------------------------------------------------

const createNew = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const book = await BooksModel.create({
      title,
      author,
      pageQuantity,
    });

    res.status(201);
    res.json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const updateById = async (req, res) => {
  try {
    const { title, author, pageQuantity = 0 } = req.body;
    const { id } =  req.params;

    const result = await BooksModel.update(
      {
        title,
        author,
        pageQuantity,
      },
      { where: { id } },
    );

    res.status(200);
    res.json(result);
  } catch (err) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const bookToDelete = await BooksModel.findByPk(id);
    await bookToDelete.destroy();

    res.status(200);
    res.json(bookToDelete);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
};

module.exports = {
  getAll,
  getById,
  createNew,
  updateById,
  deleteById,
}
