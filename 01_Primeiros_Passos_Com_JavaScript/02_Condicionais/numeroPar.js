const numero = 1;

const isNumeroPar = (numero % 2) === 0; //== ingnora o tipo e o === deve ser identico.

console.log(isNumeroPar);

if(isNumeroPar)
{
    console.log('O numero é Par.');
}
else
{
    console.log('O numero é Impar.');
}