const connection = require('./mysql-connection');

const getAll = async () => {
    const [customers] = await connection.execute('SELECT * FROM customers');
    return customers;
}

const getById = async (id) => {
    const [customer] = await connection.execute('SELECT * FROM customers WHERE id = ?', [id]);
    return customer[0];
}

const getByCpf = async (cpf) => {
  const [customer] = await connection.execute('SELECT * FROM customers WHERE cpf = ?', [cpf]);
  return customer[0];
}

const create = async ({ name, cpf, email, password }) => {
    const [{ insertId }] = await connection.execute('INSERT INTO customers (name, cpf, email, password) VALUES (?, ?, ?, ?)',
        [name, cpf, email, password]);
    return {
        id: insertId,
        name,
        email,
        cpf,
        password
    }
}

const update = async ({ id, name, cpf, email, password }) => {
    await connection.execute('UPDATE customers SET name = ?, cpf = ?, email = ?, password = ? WHERE id = ?',
        [name, cpf, email, password, id]);
    return {
        id,
        name,
        email,
        cpf,
        password
    }
}

const deleteById = async (id) => {
    await connection.execute('DELETE FROM customers WHERE id = ?', [id]);
}

const buyBook = async ({ bookId, customerId }) => {
  await connection.execute('INSERT INTO customers_books (bookId, customerId) VALUES (?, ?)', [bookId, customerId]);
}

const getCustomerBooks = async (customerId) => {
  const [books] = await connection.execute(`SELECT b.id, title, pages, released
  FROM books b 
  JOIN customers_books cb ON b.id = cb.bookId
  WHERE cb.customerId = ?`, [customerId])

  return books;
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    getByCpf,
    deleteById,
    getCustomerBooks,
    buyBook
}