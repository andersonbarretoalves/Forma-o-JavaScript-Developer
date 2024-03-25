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

const precoEtanal = 5.79;
const precoGasolina = 6.66;
const KmPorLitro = 10;
const distanciaEmKm = 100;
let tipoCombustivel = 'Gasolina';

const  litrosConsumidos = distanciaEmKm / KmPorLitro;

if (tipoCombustivel === 'Etanol')
{
    const valorGasto = litrosConsumidos * precoEtanal;
    console.log(valorGasto.toFixed(2));
}
else
{
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

