const readline = require('readline-sync');

const askName = () => {
  return readline.question("Qual o seu nome? ")
}
const askHeight = () => {
  return readline.questionFloat("Qual a sua altura? ")
}
const askWeight = () => {
  return readline.questionFloat("Qual o seu peso? ")
}

module.exports = {
  askName,
  askHeight,
  askWeight,
}