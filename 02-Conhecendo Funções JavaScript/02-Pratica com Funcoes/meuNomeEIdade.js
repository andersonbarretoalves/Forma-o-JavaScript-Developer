function escrevaMeuNome(nome)
{
    return 'Meu nome é: ' + nome;
}

function verificarIdade(idade)
{
    if (idade >= 18)
    {
        console.log(escrevaMeuNome('Anderson') + ' Tenho ' + idade + ' anos e sou maior de idade.' );
    }
    else
    {
        console.log(escrevaMeuNome('Anderson') + ' Tenho ' + idade + ' anos e sou menor de idade.');
    }
}


verificarIdade(17);
