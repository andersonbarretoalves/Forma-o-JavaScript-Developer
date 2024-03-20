

function sayMyName(name)
{
    console.log('Your name is: ' + name);
}

function quadrado(valor)
{
    return valor * valor;
}

function incrementarJurus(valor, percentualJuros)
{
    const valorDeAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrecimo;
}

sayMyName('Anderson'); //funções que não retornão nada, é chamadas de procedimento.
sayMyName('Ruan')

console.log('Valor de Quadrado de 10 + Quadrado de 10: ' + (quadrado(10) + quadrado(10)));
const quadradoDeDez = quadrado(10);
console.log('Valor do Quadrado de 10: ' + quadradoDeDez);

console.log('Valor do produto com 10% de jutos: ' + incrementarJurus(100, 10));
console.log('Valor do produto com 15% de jutos: ' + incrementarJurus(100, 15));