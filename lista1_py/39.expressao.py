#39.lista1 - Questão 39 -Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = R + S / 2, onde R = (A + B)**2 e S = (B + C)**2.

#Entrada
num1 = int(input('Informe o primeiro número: '))
num2 = int(input('Informe o segundo número: '))
num3 = int(input('Informe o terceiro número: '))

#Processamento
r = (num1 + num2)**2

s = (num2 + num3)**2

d = (r + s) / 2

#Saída
print(f'\n>>> O resultado da expressão D = R + S / 2 é : {d:.1f}.')
