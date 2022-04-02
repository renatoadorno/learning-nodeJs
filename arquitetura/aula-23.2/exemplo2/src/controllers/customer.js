
const CustomerModel  = require('../models/customer');
const CustomerService  = require('../services/customer');

const getAll = async (req, res) => {
  try {
    const customers = await CustomerModel.getAll();
    return res.status(200).json(customers);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor'});
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const customer = await CustomerModel.getById(id);
    return res.status(200).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor'});
  }
}

const create = async (req, res) => {
  try {
    const customer = await CustomerService.create(req.body)

    return res.status(201).json(customer);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor'});
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;

    const customer = await CustomerService.update({ ...req.body, id });

    return res.status(200).json(customer);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor'});
  }
}

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    await CustomerModel.deleteById(id);
    return res.status(200).end();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Erro no Servidor'});
  }
}

module.exports = { getAll, getById, create, update, deleteById }