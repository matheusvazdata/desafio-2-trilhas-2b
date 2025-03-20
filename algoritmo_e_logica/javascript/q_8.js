// Crie uma função chamada Subtracao que receba dois números como parâmetros e retorne o resultado da subtração entre eles

function subtracao(a, b) {
    return a - b;
}

let exemplos = [
    [10, 3],
    [25, 7]
];

exemplos.forEach(par => {
    console.log(`A subtração ${par[0]} - ${par[1]} = ${subtracao(par[0], par[1])}`);
});