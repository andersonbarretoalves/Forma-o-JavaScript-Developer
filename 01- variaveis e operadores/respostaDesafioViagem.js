/*
- Faça um programa para calcular o valor de uma Viagem.

Você terá 3 variaveis. Sendo elas:
1- Preço do combustivel;
2- Gasto médio de combustivel do carro por KM;
3- Distância em KM da viagem;
*/

//Respostal da aula.

const precoCombustivel = 5.79;
const KmPorLitro = 10;
const distanciaEmKm = 100;

const  litrosConsumidos = distanciaEmKm / KmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));