#29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros e dois últimos dígitos. Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito. Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.

import math

def main():
    #Entrada
    numero = obter_numero_int('Informe um número de 4 dígitos: ')
    
    #Processamento
    quadrado_perfeito= eh_quadrado_perfeito(numero)

    #Saída
    print(f'\n>>> O número {numero} {quadrado_perfeito}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def eh_quadrado_perfeito(num):
    primeira_dezena = num // 100
    segunda_dezena = num % 100

    raiz_num = math.sqrt(num)
    soma_dezenas = primeira_dezena + segunda_dezena
    
    if(raiz_num == soma_dezenas):
        return 'é um QUADRADO PERFEITO'
    else:
        return 'NÃO é um QUADRADO PERFEITO'

main()