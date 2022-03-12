const fs = require('fs');

const input =require('/input');
const imc = require('./imc');

function main() {
  const name = input.askName();
  const height = input.askHeight();
  const weight = input.askWeight();

  const result = imc(weight, height);

  fs.appendFileSync('imc.txt', `O IMC de ${name} é: ${result}\n`)
}

main();


// console.log(`O IMC de ${name} é: ${result}`)
