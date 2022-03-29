const express = require('express');

const {
  authorsGetAll,
  authorsGetById,
} = require('../controllers/Authors');

const router = express.Router();

router.get('/', authorsGetAll)

module.exports = router;
