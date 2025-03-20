/* Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário. O usuário terá um limite de três tentativas para inserir a senha correta.
a)      Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
b)  	Caso contrário, exiba a mensagem: "Senha bloqueada!" */

const readline = require('readline-sync');

const senhaCorreta = '54321';
let tentativas = 0;
let senhaDigitada;

do {
    senhaDigitada = readline.question('Digite a senha de acesso: ', { hideEchoBack: true });
    tentativas++;

    if (senhaDigitada === senhaCorreta) {
        console.log('Acesso concedido!');
        break;
    } else {
        console.log(`Senha incorreta! Tentativa ${tentativas} de 3.\n`);
    }

} while (tentativas < 3);

if (senhaDigitada !== senhaCorreta) {
    console.log('Senha bloqueada!');
}