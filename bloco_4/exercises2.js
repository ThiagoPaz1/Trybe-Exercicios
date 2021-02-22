//1-Percorrer o array:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for(i = 0; i < numbers.length; i++){
     //console.log(numbers[i])
}

//2-Soma todos os valores do array:
let somaNum = 0

for(i = 0; i < numbers.length; i++){
    somaNum += numbers[i]    
}
//console.log(somaNum)

//3-Média aritmética:
let mediaNum = somaNum/numbers.length
// console.log(mediaNum)

//4-Maior ou menor que 20:
if(mediaNum > 20){
  // console.log( 'Valor maior que ' + 20)
}else{
    //console.log( 'Valor menor que ' + 20)
}

//5-Maior número do array:

let maiorNum = 0
for(contador = 0; contador <= numbers.length-4; contador++){
    maiorNum = numbers[contador]
}
 //console.log(maiorNum)

 //6-Descubra quantos valores ímpares existem no array e imprima o resultado.
 let mod = 0
 for(i = 0; i < numbers.length; i++){
      mod += numbers[i] % 2  
}
    if(mod === 0){
        //console.log('Nenhum valor encontrado.')
    }else{
       //console.log(mod)
    }  
   
 



