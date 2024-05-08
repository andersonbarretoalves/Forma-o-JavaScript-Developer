const notas = [5.5, 7, 5, 8];

let soma = 0;

function gets() {
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];          
    }
    
    return media = soma / notas.length;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };