def subtracao(a, b):
    return a - b

# Lista de tuplas com pares de números
exemplos = [
    (15, 3),
    (28, 7)
]

# Iterando pela lista e aplicando a função
for a, b in exemplos:
    print(f'A subtração {a} - {b} = {subtracao(a, b)}')