

const pessoa = 
{
    nome:'Anderson Barreto Alves',
    idade: 43,
    descrever: function ()
    {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

/*
pessoa.descrever = function ()
{
    console.log(`Meu nome é ${this.nome}`);
}

console.log(anderson.nome);
console.log(anderson.idade);
console.log(anderson);


pessoa['noem'] = 'teste'; // é a mesmo coisa que: pessoa.nome = 'teste';

const atributo = 'idade';

console.log(pessoa[atributo]);
*/

pessoa.descrever();