const connection = require('./mysql-connection');

const getAll = async () => {
  const [books] = await connection.execute("SELECT * FROM books");

  return books;
}

const create = async ({ title, released, pages }) => {
  const [{ insertId }] = await connection.execute('INSERT INTO books (title, released, pages) VALUES (?, ?, ?)',
        [title, released, pages]);

    return {
        id: insertId,
        title,
        released,
        pages
    }
}

module.exports = { getAll, create }