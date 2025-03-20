# Utilize o comando de repetição “while”, para solicitar que o usuário informe um número. O programa deve continuar executando até que o usuário digite o número 3, momento em que deverá se encerrar

while True:
    num = int(input("Digite um número (3 para sair): "))
    if num == 3:
        break
    else:
        print(f'Você digitou: {num}\n')
        continue

print('Loop encerrado!')