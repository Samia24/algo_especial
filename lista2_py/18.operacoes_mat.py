#18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação sobre os dois valores lidos. 

def main():
    #Entrada
    valor1 = obter_numero_int('Digite o valor 1: ')
    valor2 = obter_numero_int('Digite o valor 2: ')
    opcoes = obter_numero_int('Escolha uma opção (1 - Adição; 2 - Subtração; 3 - Multiplicação; 4 - Divisão): ')
    
    #Processamento
    result = resultado(valor1, valor2, opcoes)
    
    #Saída
    print(result)
    
def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def resultado(valor1, valor2, opcoes):
    if (opcoes == 1):
        adicao = valor1 + valor2
        return f'\n>>> Você escolheu a opção adição. \nO resultado de {valor1} + {valor2} é {adicao}.'
    elif (opcoes == 2):
        subtracao = valor1 - valor2
        return f'\n>>> Você escolheu a opção subtração. \nO resultado de {valor1} - {valor2} é {subtracao}.'
    elif( opcoes == 3):
        multiplicacao = valor1 * valor2
        return f'\n>>> Você escolheu a opção multiplicação. \nO resultado de {valor1} x {valor2} é {multiplicacao}.'
    elif(opcoes == 4):
        divisao = valor1 / valor2
        return f'\n>>> Você escolheu a opção divisão. \nO resultado de {valor1} / {valor2} é {divisao:.1f}.'

main()