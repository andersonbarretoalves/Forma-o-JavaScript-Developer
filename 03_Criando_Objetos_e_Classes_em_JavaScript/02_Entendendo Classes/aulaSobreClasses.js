

class Pessoa {

    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

function compararPessoas(Pessoa1, Pessoa2){
    if (Pessoa1.idade > Pessoa2.idade) {
        console.log(`${Pessoa1.nome} é mais velho(a) que ${Pessoa2.nome}.`);
    } else if (Pessoa2.idade > Pessoa1.idade) {
        console.log(`${Pessoa2.nome} é mais velho(a) que ${Pessoa1.nome}.`);
    } else {
        console.log(`${Pessoa1.nome} e ${Pessoa2.nome} tem a mesma idade.`);
    }
}

// const vitor = new Pessoa();
// vitor.nome = 'Vitor Hugo';
// vitor.idade = 19;

// const anderson = new Pessoa();
// anderson.nome = 'Anderson Alves';
// anderson.idade = 43;

const anderson = new Pessoa('Anderson Alves', 43);
const jullyana = new Pessoa('Jyllyana', 39);

compararPessoas(anderson, jullyana);

//console.log(vitor);
console.log(anderson);
console.log(jullyana);

//vitor.descrever();
//anderson.descrever();
//jullyana.descrever();