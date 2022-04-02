const CustomerModel  = require('../models/customer');
const fs = require('fs').promises;

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

module.exports = { create, update }