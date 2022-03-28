const axios = require('axios')

// requisição sincrona
// sequential: 1.40s processamento || 4,565 espera
const getPokemonById = async (id) => {
  const apiPokemon = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await axios.get(apiPokemon); // retorna uma promessa
  return response.data;
}

async function main() {
  for (let i = 1; i <= 50; i++) {
    const poke = await getPokemonById(i);
    console.log(poke.name);
  }
}

main();
