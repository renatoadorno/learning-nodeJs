const mysql = require('mysql2/promise');
const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'model_database',
    password: 'admin',
    port: 3306 
  });

app.get('/customers', async (req, res) => {

  try {
    const [ customers ] = await connection.execute('SELECT * FROM customers');
    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }

}); 

app.get('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ customer ] = await connection.execute('SELECT * FROM customers WHERE id = ?', [ id ]);
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}); 

app.get('/customers/profile/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [ customer ] = await connection.execute(`SELECT * FROM customers WHERE id = ${id}`);
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
}); 

app.post('/customers', async (req, res) => {
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

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.put('/customers/:id', async (req, res) => {
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

  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
});

app.delete('/customers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await connection.execute('DELETE FROM customers WHERE id = ?', [ id ]);
    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(500).end();
  }
})






app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
