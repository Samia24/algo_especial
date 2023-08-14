#38.lista1 - Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o resultado em forma de fração.

#Entrada
num1 = int(input('Numerador 1: '))
den1 = int(input('Denominador 1: '))
num2 = int(input('Numerador 2: '))
den2 = int(input('Denominador 2: '))

#Processamento
denominador = den1 * den2
numerador = ((denominador/den1)*num1) + ((denominador/den2)*num2)

#Saída
print(f'\nA soma dessas frações é >>> {numerador:.0f} / {denominador:.0f}.')