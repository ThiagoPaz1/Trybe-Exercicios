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
