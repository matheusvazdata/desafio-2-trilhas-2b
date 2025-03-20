// Crie uma função sem parâmetros que retorne uma mensagem personalizada de sua preferência

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let nome;

rl.question('Digite seu nome: ', (input) => {
    nome = input;

    function mensagemPersonalizada() {
        return `Olá, ${nome}! Seja bem-vindo ao sistema.`;
    }

    console.log(mensagemPersonalizada());
    rl.close();
});