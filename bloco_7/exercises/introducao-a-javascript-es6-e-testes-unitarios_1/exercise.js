//PARTE 1
const testingScope = escopo => {
    if (escopo === true) {
      var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      // console.log(ifScope);
    } else {
      var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
      // console.log(elseScope);
    }
    // console.log(`${ifScope} o que estou fazendo aqui ? :O`); // Se necessário esta linha pode ser removida.
  }

  testingScope(true);

  const oddsAndEvens = [13, 3, 4, 10, 7, 2];

  const sortArrayBonus = array => {
    const sortOddsAndEvens = array.sort((a, b) => a - b);
    return sortOddsAndEvens;
  }
  
  const sortedArrayBonus = sortArrayBonus(oddsAndEvens);
  // console.log(`Os números ${sortedArrayBonus} se encontram ordenados de forma crescente !`);
//PARTE 2

const factorial = number => {
  let result = 1

  for (let index = 2; index <= number; index += 1) {
      result *= index
  }

  return result
}

// console.log(factorial(5))

const longestWord = text => {
  let wordArray = text.split(' ')
  let maxLength = 0
  let result = ''

  for (const word of wordArray) {
      if (word.length > maxLength) {
          maxLength = word.length
          result = word
      }
  }

  return result
}

// console.log(longestWord("Antonio foi no banheiro e não sabemos o que aconteceu"))

const contador = () => {
  let clickCount = 0;
  let armazen = document.querySelector('#mostraNumeros');
  let click = document.querySelector('#clickCount');
  click.addEventListener('click', () => {
    armazen.value = clickCount += 1;
  });
}
// contador();

const unindoStrings = (string) => {
  let string2 = 'Tryber x aqui!';
  let letraBuscar = 'x'
  let subString = string2.split(' ');
  
  for (let i in subString) {
    if (subString[i] === 'x') {
      subString[i] = string;
    }
  }
  return console.log(`${subString}`);
}
unindoStrings('Bebeto');
