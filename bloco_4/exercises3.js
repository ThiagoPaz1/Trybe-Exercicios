//1-Faça um quadrado de asteriscos:
let n = 5;
let contador = 0;
let simbolo = '*';
let quadrado = '';
let triangulo = '';

for(contador = 0; contador < n; contador++){
  quadrado = quadrado + simbolo;
}
for(contador = 0; contador < n; contador++){
  console.log(quadrado);
}

//2-Faça um triângulo de asteriscos:
for(contador = 0; contador < n; contador++){
  triangulo = triangulo + simbolo;
  console.log(triangulo);
}
