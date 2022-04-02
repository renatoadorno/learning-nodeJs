const express = require('express')
const bodyParser = require('body-parser');
const error = require('./src/middleware/error');

const author = require('./src/routes/authorRoute');
const book = require('./src/routes/bookRoute');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use(express.json());

app.use('/authors', author);
app.use('/books', book);
// app.use(error);

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
