#26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.

import math

def main():
    #Entrada
    lado_1 = obter_numero_float('Informe o valor do 1º lado do triângulo: ')
    lado_2 = obter_numero_float('Informe o valor do 2º lado do triângulo: ')
    lado_3 = obter_numero_float('Informe o valor do 3º lado do triângulo: ')

    #Processamento
    hipotenusa, cateto1, cateto2 = calcular_hipotenusa_catetos(lado_1, lado_2, lado_3)

    #Saída
    print(f'\n>> O valor da hipotenusa do triângulo é: {hipotenusa}cm;\n O valor dos catetos é: {cateto1} e {cateto2} cm.')

def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def calcular_hipotenusa_catetos(lado1,lado2,lado3):
    quadrado_lado1 = lado1 ** 2
    quadrado_lado2 = lado2 ** 2
    quadrado_lado3 = lado3 ** 2


    if (quadrado_lado1 == (quadrado_lado2 + quadrado_lado3)):
        hipotenusa = lado1
        cateto1 = lado2
        cateto2 = lado3
        return hipotenusa, cateto1, cateto2

    elif (quadrado_lado2 == (quadrado_lado1 + quadrado_lado3)):
        hipotenusa = lado2
        cateto1 = lado1
        cateto2 = lado3
        return hipotenusa, cateto1, cateto2

    elif (quadrado_lado3 == (quadrado_lado1 + quadrado_lado2)):
        hipotenusa = lado3
        cateto1 = lado1
        cateto2 = lado2
        return hipotenusa, cateto1, cateto2
        
main()