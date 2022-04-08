require('dotenv').config();
const express = require('express');
const BookRouter = require('./routes/bookRoutes');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/books', BookRouter);
app.use((err, req, res, next) => res.status(500).json({ message: 'Erro no servidor' }));

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
