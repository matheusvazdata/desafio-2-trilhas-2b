// Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let lista = [];
let vezes = 5;
let contador = 0;

function perguntarNumero() {
    if (contador < vezes) {
        rl.question('Digite um número: ', (input) => {
            let numero = parseInt(input);
            lista.push(numero);
            contador++;
            perguntarNumero();
        });
    } else {
        console.log('Os números digitados foram:', lista.join(', '));
        rl.close();
    }
}

perguntarNumero();