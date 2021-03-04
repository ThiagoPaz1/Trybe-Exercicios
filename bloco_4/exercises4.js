//1- Baos vindas:
let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };
console.log('Bem vinda ' + info.personagem + '.');

//2-Nova propriedade:
info['recorrente'] = 'Sim';
console.log(info);

//3-Faça um for/in que mostre todas as chaves do objeto:
for(i in info){
    console.log(i)
}

//4-Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto:
for(i in info){
    console.log(info[i])
}

//5-Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro, com valores diferentes:
info['personagem'] = "Margarida e Tio Patinhas.";
info['origem'] = "Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178.";
info['nota'] = "Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas"; 

console.log(info)

// EXERCICIO FUNÇẼOS:
//1-Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for:
//Duas formas de resolver o exercício
function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }
  
  function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); //true
  console.log(verificaPalindrome('desenvolvimento')); //false

// 2-Crie uma função que receba um array de inteiros e retorne o índice do maior valor: 
function indiceDoMaior(numeros) {
    let indiceMaior = 0;
    for (let indice in numeros) {
      if (numeros[indiceMaior] < numeros[indice]) {
        indiceMaior = indice;
      }
    }
    return indiceMaior;
  }
  
  console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4