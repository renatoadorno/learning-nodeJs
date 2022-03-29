const express = require('express')
const bodyParser = require('body-parser');

const author = require('./src/routes/Authors');
const book = require('./src/routes/Books');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.json());

app.use('/authors', author);
app.use('/books', book);
// app.use(error);

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
