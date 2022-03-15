
function soma(a,b) {
  return a + b;
}

function main() {
  console.log(soma(1, 3));
  console.log(soma(5, 2));

  setTimeout(() => {
    console.log('a');
  }, 3000)

  setTimeout(() => {
    console.log('b');
  }, 2000)

  console.log(soma(2, 2));
}

main();

// return 
// 4
// 7
// 4
// b
// a