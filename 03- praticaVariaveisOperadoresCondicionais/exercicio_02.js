/*
2) O IMC - Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritimo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do Peso;
- Entre 18.5 e 25 Peso Normal;
- Entre 25 e 30 Acimado peso;
- Entre 30 e 35 obesidade grau 1
- Entre 35 e 40 obesidade grau 2
- Acima de 40 Obesidade Extrema;
*/

const peso = 83;
const altura = 1.65;

const imc = peso / (altura * altura); //pode ser usado a biblioteca Math: Math.pow(altura, 2)

Math.pow(altura, 2)

console.log('IMC: ' + imc.toFixed(2));

if (imc < 18.5)
{
    console.log('Paciente abaixo do peso!');
}
else if (imc >= 18.5 && imc < 25)
{
    console.log('Paciente com peso normal!');
}
else if (imc >= 25 && imc < 30)
{
    console.log('Paciente acima do peso!');
}
else if (imc >= 30 && imc < 35)
{
    console.log('Paciente com obesidade grau 1!');
}
else if (imc >= 35 && imc < 40)
{
    console.log('Paciente com obesidade grau 2!');
}
else
{
    console.log('Paciente com obesidade Extrema!');
}
