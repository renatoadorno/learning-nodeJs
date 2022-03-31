const express = require('express');

const {
  booksGetAll,
} = require('../controllers/bookController');

const router = express.Router();

router.get('/', booksGetAll)

module.exports = router;
