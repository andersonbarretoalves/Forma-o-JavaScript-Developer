/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variaveis. Sendo elas:
1 - Preço do Etanol;
2 - Preço da Gasolina;
3 - O tipo de Combustível que está no seu Carro;
4 - Gasto médio de combustível do carro por KM;
5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.
*/

let precoEtanal = 5.00;
let precoGasolina = 6.00;
const distanciaEmKm = 400;
const gastoMedioCombustivelKm = 10;

let tipoCombustivel = precoGasolina;

let valorPorKm = tipoCombustivel / gastoMedioCombustivelKm;

valorGasto = valorPorKm * distanciaEmKm;

if (tipoCombustivel = precoEtanal)
{
    console.log('O preço do Combustível por KM R$ ' + valorPorKm.toFixed(2));

    console.log('O valor gasto na Viagem foi: R$ ' + valorGasto.toFixed(2));
}
else
{
    console.log('O preço do ' + tipoCombustivel + 'por KM R$ ' + valorPorKm.toFixed(2));

    console.log('O valor gasto na Viagem foi: R$ ' + valorGasto.toFixed(2));
}



