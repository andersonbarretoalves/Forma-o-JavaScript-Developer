function calculoimc(peso, altura)
{
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc)
{
    if (imc < 18.5)
    {
        return ('Paciente abaixo do peso!');
    }
    else if (imc >= 18.5 && imc < 25)
    {
        return ('Paciente com peso normal!');
    }
    else if (imc >= 25 && imc < 30)
    {
        return ('Paciente acima do peso!');
    }
    else if (imc >= 30 && imc < 35)
    {
        return ('Paciente com obesidade grau 1!');
    }
    else if (imc >= 35 && imc < 40)
    {
        return ('Paciente com obesidade grau 2!');
    }
    else
    {
        return ('Paciente com obesidade Extrema!');
    }
}

function main()
{
    const peso = 82;
    const altura = 1.65;

    const imc = calculoimc(peso, altura);
    console.log(classificarImc(imc));
}

main();