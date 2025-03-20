# Crie uma função chamada calcularQuadrado que receba um número como parâmetro e retorne o quadrado desse número

def calcular_quadrado(numero):
    return numero ** 2

exemplos = [3, 7, 10]

for num in exemplos:
    print(f'O quadrado de {num} é {calcular_quadrado(num)}')