/*
- Faça um programa para calcular o valor de uma Viagem.

Você terá 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem;
*/

//Resolução feito por mim.

let precoCombustivel = 5.79;
let KmPorLitro = 10;
let distanciaEmKm = 100;

let valorPorKm = precoCombustivel / KmPorLitro;
console.log('Media de combustivel por KM: R$' + valorPorKm.toFixed(2));
valorGasto = valorPorKm * distanciaEmKm;
console.log('Valor da Viagem: R$' + valorGasto.toFixed(2));






