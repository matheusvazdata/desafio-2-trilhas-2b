# Solicite ao usuário cinco números, armazene-os em uma lista e, em seguida, exiba todos os números na tela

lista = []

for _ in range(5):
    lista.append(int(input('Digite um número: ')))

print('Os números digitados foram:', ', '.join([str(numero) for numero in lista]))