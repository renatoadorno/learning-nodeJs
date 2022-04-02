const CustomerModel  = require('../models/customer');
const fs = require('fs').promises;

const getById = async (id) => {
  try {
    const customer = await CustomerModel.getById(id);

    customer.book = await CustomerModel.getCustomerBooks(customer.id);

    return customer;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor'};
  }
}

const create = async (customer) => {
  try {
    const { name, cpf } = customer;

    const exist = await CustomerModel.getByCpf(cpf);

    if(exist) {
      return { error: 400, message: "Usuário já cadastrado!"};
    }

    const created = await CustomerModel.create(customer);

    fs.appendFile('inbox.txt', `Olá, ${name}! Concluímos o seu cadastro.s`)

    return created;
  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor'};
  }
}

const update = async (customer) => {
  try {
    const { id, name, email, cpf, password } = customer;

    const exist = await CustomerModel.getById(id);

    if(!exist) {
      return { error: 404, message: "Usuário não cadastrado!"};
    }

    const updated = await CustomerModel.update({id, name, cpf, email, password});

    fs.appendFile('inbox.txt', `Olá, ${name}! seu cadastro foi atualizado.\n`)

    return updated;

  } catch (error) {
    console.log(error);
    return { error: 500, message: 'Erro no Servidor'};
  }
}

const buyBook = async ({ bookId, customerId }) => {
  try {
    if(!bookId) return { error: 400, message: 'bookId é obrigatório.' };
    if(!customerId) return { error: 400, message: 'customerId é obrigatório.' };

    await CustomerModel.buyBook({ bookId, customerId });

    return { message: 'Compra realizada com sucesso!'}
  } catch (err) {
    console.log(err);
    return { error: 500, message: 'Erro no Servidor'};
  }
}

module.exports = { create, update, buyBook, getById }