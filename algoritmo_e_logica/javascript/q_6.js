// Crie uma função que receba um nome como parâmetro e retorne uma mensagem personalizada no seguinte formato: "Olá, (nome), que bom ter você no programa Trilhas."

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function capitalizarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function mensagemPersonalizada(nome) {
    let nomeFormatado = capitalizarNome(nome);
    return `✨ Olá, ${nomeFormatado}! Que bom ter você no programa Trilhas. 🚀`;
}

rl.question('Digite seu nome: ', (nome) => {
    console.log(mensagemPersonalizada(nome));
    rl.close();
});