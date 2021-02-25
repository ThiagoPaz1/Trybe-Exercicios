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