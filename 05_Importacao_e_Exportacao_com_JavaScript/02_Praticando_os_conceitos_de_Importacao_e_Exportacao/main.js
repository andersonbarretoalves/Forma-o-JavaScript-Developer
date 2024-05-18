/* Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1 - 100.
 Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

 Dados de entrada:
 5
 50
 10
 98
 23

 Saída:
 98
*/

const { gets, print } = require('./funcoesAuxiliares');
/*
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}
*/

//Simplificando o codigo:

const quantidadeDeAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < quantidadeDeAlunos; i++) {
    numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}

print(maiorValorEncontrado);

