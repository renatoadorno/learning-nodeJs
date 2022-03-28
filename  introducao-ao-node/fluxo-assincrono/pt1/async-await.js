const fooPromise = () => {
  return new Promise((resolve, reject) => resolve({attr: 1}))
};

const fooAsync = async () => ({ attr: 2 });

const fooSync = () => ({ attr: 3 });

async function main() {
  const a = await fooPromise();
  const b = await fooAsync();
  const c = fooSync();

  console.log(a.attr);
  console.log(b.attr);
  console.log(c.attr);
}

main();