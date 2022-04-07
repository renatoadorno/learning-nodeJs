const express = require('express');
const { User } = require('../models');
// const user = require('../models/user');

const router = express.Router();

router.get('/', async (req, res, _next) => {
  try {
    const users = await User.findAll();

    return res.status(200).json(users);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

router.post('/', async (req, res, _next) => {
  try {
    const { fullName, email, phone_num } = req.body;
    // Criar o meu produto
    // const created = await User.create({ fullName, email, phone_num });
    const created = await User.create({ fullName, email, phone_num });
    return res.status(201).json(created);
  } catch (e) {
    console.log(e.message);
    return res.status(500).end();
  }
});

module.exports = router;
