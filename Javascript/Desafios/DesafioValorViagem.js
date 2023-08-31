/*
Faça um programa que calcule ás despesas de uma viagem de carro:

Váriaveis há declarar:
1 - Preço do combustível
2 - Gasto Médio de combústivel por KM
3 - Distância em KM da viagem


*/

let PrecoCombustivel = 5.79;
let KmPorLitro = 10;
let distanciaEmKm = 1580;
let LitrosComsumidos = (distanciaEmKm / KmPorLitro);
let valorGasto = LitrosComsumidos*PrecoCombustivel;

console.log("Custo total da viagem: R$:"+valorGasto.toFixed(2));
