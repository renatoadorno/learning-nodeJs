// EXEMPLO-1
const setTimeoutPromise = () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('2. Passou tres segundos'))
    }, 3000)
  })
}

async function main() {
  console.log('1. Inicio da função main');
  
  // await só é usado para esperar uma promise
  // await só ira funcionar com promise em uma função assincrona
  await setTimeoutPromise();

  console.log('3. Fim da função main');
}

main();

