const express = require('express');

const {
  booksGetAll,
} = require('../controllers/Books');

const router = express.Router();

router.get('/', booksGetAll)

module.exports = router;
