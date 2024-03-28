/*
1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por kilômetro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularGastoDePercuso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioKm * precoCombustivel;
    }    
}

const mobe = new Carro('Fiat', 'Prata', 1 / 12);
const palio = new Carro('Fiat', 'Preto', 1 / 10,);

console.log(mobe.calcularGastoDePercuso(70, 5).toFixed(2));
console.log(palio.calcularGastoDePercuso(70, 5).toFixed(2));