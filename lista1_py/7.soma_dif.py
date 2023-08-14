#7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.

#Entrada
num1 = int(input('Digite o 1º número: '))
num2 = int(input('Digite o 2º número: '))
num3 = int(input('Digite o 3º número: '))

#Processamento
soma = num1 + num2
diferenca = num2 - num3

#Saída
print(f'\n>>> A soma de {num1} + {num2} é {soma}.')
print(f'>>> A diferença de {num2} - {num3} é {diferenca}.')