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

    calcularImc() {
        return this.peso /(this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc();

        if (imc <= 18.5){
            return ('Abaixo do Peso!');
        }
        else if (imc > 18.5 && imc <= 24.9) {
            return ('Parabéns, Peso Ideal!');
        }
        else if (imc > 25.0 && imc <= 29.9) {
            return ('Levemente acima do Peso!');
        }
        else if (imc > 30.0 && imc <= 34.9) {
            return ('Obesidade grau I!');
        }
        else if (imc > 35.0 && imc <= 39.9) {
            return ('Obesidade grau II! (Severa)');
        }
        else {
            return ('Obesidade III! (Mórbida)');
        }
    }
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log(jose.calcularImc().toFixed(2));
console.log(jose.classificarImc());

const anderson = new Pessoa('Anderson', 82, 1.65)
console.log(anderson);
console.log(anderson.calcularImc().toFixed(2));
console.log(anderson.classificarImc());