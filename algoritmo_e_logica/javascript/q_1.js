// Utilize o comando de repetição “while”, para solicitar que o usuário informe um número. O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarNumero() {
    rl.question('Digite um número (3 para sair): ', (input) => {
        let numero = parseInt(input);

        if (numero === 3) {
            console.log('Saindo do programa...');
            rl.close();
        } else {
            console.log(`Você digitou: ${numero}\n`);
            perguntarNumero(); 
        }
    });
}

perguntarNumero();