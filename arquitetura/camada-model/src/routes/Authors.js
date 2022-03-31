const express = require('express');

const {
  authorsGetAll,
  authorsGetById,
  authorsPost,
} = require('../controllers/Authors');

const router = express.Router();

router.get('/', authorsGetAll);
router.get('/:id', authorsGetById);
router.post('/', authorsPost);

module.exports = router;
