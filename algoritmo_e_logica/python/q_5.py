# Crie uma função sem parâmetros que retorne uma mensagem personalizada de sua preferência

nome = input('Digite seu nome: ')  # Variável global

def mensagem_personalizada():
    return f'Olá, {nome}! Seja bem-vindo ao sistema.'

print(mensagem_personalizada())