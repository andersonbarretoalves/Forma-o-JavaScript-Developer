const numero = 2;

const NumeroPar = (numero % 2) === 0; //== ingnora o tipo e o === deve ser identico.

console.log(NumeroPar);

if (numero === 0)
{
    console.log('Numero Invalido!')
}

else if(NumeroPar)
{
    console.log('O numero é Par.');
}

else
{
    console.log('O numero é Impar.');
}

