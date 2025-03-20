'''Crie um programa utilizando o loop "do...while" para solicitar a senha de acesso ao usuário. O usuário terá um limite de três tentativas para inserir a senha correta.
a)      Se a senha for inserida corretamente dentro do limite de tentativas, exiba a mensagem: "Acesso concedido!"
b)  	Caso contrário, exiba a mensagem: "Senha bloqueada!" '''

# Equivalente do programa em Python, utilizando um loop "do...while" s"imulado com "while True" e "break" para sair do loop

senha_correta = '54321'
tentativas = 0
max_tentativas = 3

while tentativas < max_tentativas:
    senha_digitada = input('Digite a senha de acesso: ')

    if senha_digitada == senha_correta:
        print('Acesso concedido!')
        break
    else:
        tentativas += 1
        print(f'Senha incorreta! Tentativa {tentativas} de {max_tentativas}.\n')

if tentativas == max_tentativas:
    print('Senha bloqueada!')