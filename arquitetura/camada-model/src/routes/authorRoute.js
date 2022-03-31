const express = require('express');

const {
  list,
  authorsGetById,
  authorsPost,
} = require('../controllers/authorController');

const router = express.Router();

router.get('/', list);
router.get('/:id', authorsGetById);
router.post('/', authorsPost);

module.exports = router;
