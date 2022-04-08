const express = require('express');

const router = express.Router();

const BooksController = require('../controller/bookController');

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);
router.post('/', BooksController.createNew);

module.exports = router;
