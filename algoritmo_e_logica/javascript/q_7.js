// Crie uma função chamada calcularQuadrado que receba um número como parâmetro e retorne o quadrado desse número

function calcularQuadrado(numero) {
    return numero ** 2;
}

let exemplos = [3, 7, 10];

exemplos.forEach(num => {
    console.log(`O quadrado de ${num} é ${calcularQuadrado(num)}`);
});