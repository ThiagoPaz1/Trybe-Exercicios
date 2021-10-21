const readline = require('readline-sync');
const weight = readline.questionFloat('Qual sua peso?');
const height = readline.questionFloat('Qual sua altura ?');
const imc = (height, weight) => weight / Math.pow(height, 2);
const imcValue = imc(height, weight);
const imcValueResult = () => {
  if (imcValue < 18.5) {
    console.log('Abaixo do peso (magreza)');
  } 
  else if (imcValue >= 18.5 && imcValue <= 24.9) {
    console.log('Peso normal');
  } 
  else if (imcValue >= 25.0 && imcValue <= 29.9) {
    console.log('Acima do peso (sobrepeso)');
  } 
  else if (imcValue >= 30.0 && imcValue <= 34.9) {
    console.log('Obesidade grau I');
  } 
  else if (imcValue >= 35.0 && imcValue <= 39.9) {
    console.log('Obesidade grau II');
  } 
  else if (imcValue >= 40) {
    console.log('Obesidade grau III e IV');
  }
}

module.exports = imcValueResult;
