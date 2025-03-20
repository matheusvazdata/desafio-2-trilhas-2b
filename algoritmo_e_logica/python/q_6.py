# Crie uma função que receba um nome como parâmetro e retorne uma mensagem personalizada no seguinte formato: "Olá, (nome), que bom ter você no programa Trilhas."

def capitalizar_nome(nome):
    return nome.capitalize()

def mensagem_personalizada(nome):
    nome_formatado = capitalizar_nome(nome)
    return f'✨ Olá, {nome_formatado}! Que bom ter você no programa Trilhas. 🚀'

nome = input('Digite seu nome: ').strip()
print(mensagem_personalizada(nome))