/*
2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor de seu IMC (IMC = peso /(altura * altura));
Instancie uma pessoa chamada josé que tenha 70kg de oesi e 1,75 de altura e peça ao josé para dizer o valor do seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura; 
    }

    calcularImc(peso, altura) {
        return peso /(altura * altura);
    }
}

const jose = new Pessoa('José', 82, 1.65);

console.log(jose);

console.log(jose.calcularImc(82, 1.65).toFixed(2));