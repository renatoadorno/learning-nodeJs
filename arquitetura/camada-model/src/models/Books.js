const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
}

// Busca todos os livros do banco.
const getAll = async () => {
  const query = 'SELECT id, title, author_id FROM books'
  const [books] = await connection.execute(query);

  return books.map(serialize);
}

const getByAuthorId = async (authorId) => {
  const query = 'SELECT * FROM books WHERE author_id=?;'
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

module.exports = {
  getAll,
  getByAuthorId,
}
