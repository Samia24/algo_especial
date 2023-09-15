#24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 (zero).

import math

def main():
    #Entrada
    coeficiente_A = obter_numero_int('Informe o valor do coeficiente A: ')
    
    if (coeficiente_A == 0):
        coeficiente_A = obter_numero_int('Informe um valor diferente de zero para o coeficiente A: ')
       
    
    coeficiente_B = obter_numero_int('Informe o valor do coeficiente B: ')
    coeficiente_C = obter_numero_int('Informe o valor do coeficiente C: ')
    
    #Processamento
    raiz_A, raiz_B, raiz_C = calcular_raiz(coeficiente_A, coeficiente_B, coeficiente_C)

    #Saída
    print(f'\n>>> A raiz de A é: {raiz_A:.1f};\nA raiz de B é: {raiz_B:.1f};\nA raiz de C é: {raiz_C}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def calcular_raiz(coef_A, coef_B, coef_C):
    raiz_A = math.sqrt(coef_A)
    raiz_B = math.sqrt(coef_B)
    raiz_C = math.sqrt(coef_C)
    return raiz_A, raiz_B, raiz_C

main()