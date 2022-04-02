const express = require('express');

const CustomerController  = require('../controllers/customer');

const router = express.Router();

router
  .get('/', CustomerController.getAll)
  .post('/buybook', CustomerController.buyBook)
  .get('/:id', CustomerController.getById) 
  .post('/', CustomerController.create)
  .put('/:id', CustomerController.update)
  .delete('/:id', CustomerController.deleteById);
 

module.exports = router