const models = require('./models/customer');
const service = require('./services/customer');

async function main() {
  // const customers = await models.getAll(); 

  const compras = [{ booksId: 1, customerId: 12}]
  const books = await models.buyBook({ });

  // const customer = await service.create({
  //   name: 'Andre',
  //   cpf: '231231233555',
  //   password: 'fasdfgasdg',
  //   email: 'andre@trybe.com'
  // })

  const customer2 = await service.update({
    id: 12,
    name: 'Andre Soares',
    cpf: '231231233555',
    password: 'fasdfgasdg',
    email: 'andre@trybe.com'
  })

  console.log(customer2);
}

main()