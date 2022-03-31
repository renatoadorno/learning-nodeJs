const { expect } = require('chai');
const authorModel = require('../src/model/authorModel');

describe('listar todos os autores', () => {

  it('o resultado é um array', () => {
    const authors = authorModel.getAll();
    expect(authors).to.be.an('array');
  })

  it('cada objeto no array tem as propriedades id, first_name, middle_name, last_name', () => {
    const authors = authorModel.getAll();

    authors.forEach(char => {
      expect(char).to.have.keys('id');
    });
  })
})
