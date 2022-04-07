require('dotenv').config();
const express = require('express');
const ProductRouter = require('./controller/productController');

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.use('/product', ProductRouter);

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`))
