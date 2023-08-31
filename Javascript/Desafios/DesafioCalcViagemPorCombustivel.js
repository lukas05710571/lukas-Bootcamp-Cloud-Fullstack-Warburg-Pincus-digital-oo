/*
Faça um programa para calcular o valor de custo médio de uma viagem
feita de carro por litro , deve levar em consideração que o usuário
podera escolhar abastecer por tipos de combústivel diferente.

*/

let PrecoEtanol = 5.79;
let PrecoGasolina = 6.66;
let KmPorLitro = 10;
let distanciaEmKm = 100;
let TipoCombustivel = 'etanol';
let resultado;

let LitrosComsumidos = distanciaEmKm / KmPorLitro;
    
if(TipoCombustivel === 'etanol'){
    resultado = LitrosComsumidos*PrecoEtanol;
    console.log("Etanol R$:"+resultado.toFixed(2));
}else if(TipoCombustivel === 'gasolina'){
    resultado = LitrosComsumidos*PrecoGasolina;
    console.log("gasolina R$:"+resultado.toFixed(2));
}else{
    console.log("Opção inválida");
}


