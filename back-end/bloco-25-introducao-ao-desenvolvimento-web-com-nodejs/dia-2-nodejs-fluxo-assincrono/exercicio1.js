const newPromise = (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    const nA = typeof n1;
    const nB = typeof n2;
    const nC = typeof n3;
    const calc = (n1 + n2) * n3;

    if (nA != typeof 0 || nB != typeof 0 || nC != typeof 0) {
     reject(new Error('Informe apenas números.'));
    }
    
    resolve(calc)
  });

  return promise;
}

newPromise(1, 2, 30)
.then(result => result < 50 ? console.log('Valor muito baixo') : console.log(result))
.catch(err => console.log(`Erro: ${err.message}`));
