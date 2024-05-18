/*
1) Faça um programa que receba a média de um aluno.
Caso a média seja < 5 imprima "Reprovado".
Caso a média seja >= 5 e < 7 imprima "Recuperação".
Caso a média seja >= 7 Imprima "Aprovado".

Exemplo:
    Entrada:
        5.5
    Saída:
        Recuperação.
*/

const {gets, print} = require('./funcoesAuxiliares');

const media = gets();

if (media < 5){
        print('Média: ' + media.toFixed(2) + ', Aluno Reprovado!');
     }
     else if (media >= 5 && media < 7){
        print('Média: ' + media.toFixed(2) + ', Aluno Recuperação!');
     }
     else{
        print('Média: ' + media.toFixed(2) + ', Aluno Aprovado!');
     }
     