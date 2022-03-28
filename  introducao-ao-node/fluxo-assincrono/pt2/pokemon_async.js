const axios = require('axios')

// requisição asincrona
// async: 0,71s user || 4,143 total
const getPokemonById = async (id) => {
  try {
    const apiPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await axios.get(apiPokemon); // retorna uma promessa
    return response.data;
  } catch (e) {
    return { };
  }
}

// o 0 é umdefined pos não exite um pokemom com esse id
// sem o uso do try cath um erro pode parar a execução de tudo
// o try cath é usado para lidar com o erro e continar a execução até o final
async function main() {
  const promises = [];

  for (let i = 0; i <= 50; i++) {
    let pokePromise = getPokemonById(i);
    promises.push(pokePromise);
  }

  const pokes =await Promise.all(promises) // o all retorna um array de resultados
  pokes.forEach(poke => console.log(poke.name));
}

main();
