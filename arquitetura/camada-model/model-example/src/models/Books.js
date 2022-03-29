const connection = require('./connection');

// // Cria uma string com o nome completo do autor
// const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
//   // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
//   // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
//   const fullName = [firstName, middleName, lastName]
//     .filter(name => name)
//     .join(" ");

//   return {
//     id,
//     firstName,
//     middleName,
//     lastName,
//     fullName
//   }
// }

// Converte o nome dos campos de snake_case para camelCase
const serialize = (bookData) => {
  return {
    id: bookData.id,
    title: bookData.title,
    authorId: bookData.author_id,
  }
}

// Busca todos os livros do banco.
const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM books'
  );

  return books.map(serialize);
}

module.exports = {
  getAll,
}
