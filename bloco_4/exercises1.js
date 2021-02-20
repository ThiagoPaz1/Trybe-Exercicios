//1-Programas para operações aritméticas básicas.
let a = 2
let b = 5
let adi = a + b
let sub = a - b
let multi = a * b
let div = a / b
let mod = a % b

console.log(adi)
console.log(sub)
console.log(multi)
console.log(div)
console.log(mod)
//2-Retorne maior número.
let x = 2
let y = 4
let z = 8

if(x < y){
    console.log(y)
}
//3-Retorne maior número.
if(x < z && z > y){
    console.log(z)
}
//4-Valor positive, negative e zero.
let posi = 1
let negat = -1

if(posi > negat){
    console.log('positive')
}
if(negat < posi){
    console.log('negative')
}else{
    console.log('zero')
}
//5-Ângulos triângulos.
let an1 = 60
let an2 = 60
let an3 = 60
//let angulo = an1 + an2 + an3

if(an1 + an2 + an3 === 180){
    console.log(true)
}else{
   console.log(false)
}


