require('dotenv').config();
const mysql = require('mysql2/promise');
const express = require('express');
const error = require('./error');

const app = express();
const PORT = 3001;

app.use(express.json());

const connection = mysql.createPool({
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DB_NAME
});

app.get('/customers', async (req, res, next) => {

  try {
    const [ customers ] = await connection.execute('SELECT * FROM customer');
    return res.status(200).json(customers);
  } catch (e) {
    next(e)
  }
}); 

app.get('/customers/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [ customer ] = await connection.execute('SELECT * FROM customers WHERE id = ?', [ id ]);
    return res.status(200).json(customer);
  } catch (e) {
    next(e)
  }
}); 

app.get('/customers/profile/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const [ customer ] = await connection.execute(`SELECT * FROM customers WHERE id = ${id}`);
    return res.status(200).json(customer);
  } catch (e) {
    next(e)
  }
}); 

app.post('/customers', async (req, res, next) => {
  try {
    const { name, email, cpf, password } = req.body;

    const [ { insertId } ] = await connection.execute('INSERT INTO customers (name, cpf, email, password) VALUES (?, ?, ?, ?)',
    [ name, cpf, email, password ]);

    return res.status(201).json({
      id: insertId,
      name,
      email,
      cpf,
      password
    });

  } catch (e) {
    next(e)
  }
});

app.put('/customers/:id', async (req, res, next) => {
  try {
    const { name, email, cpf, password } = req.body;
    const { id } = req.params;

    await connection.execute('UPDATE customers SET name = ?, cpf = ?, email = ?, password = ? WHERE id = ?',
    [ name, cpf, email, password, id ]);

    return res.status(200).json({
      id,
      name,
      email,
      cpf,
      password
    });

  } catch (e) {
    next(e)
  }
});

app.delete('/customers/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await connection.execute('DELETE FROM customers WHERE id = ?', [ id ]);
    return res.status(200).end();
  } catch (e) {
    next(e)
  }
})

app.use(error);






app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
