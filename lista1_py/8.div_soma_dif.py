#8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.

#Entrada
num1 = float(input('Digite o 1º número: '))
num2 = float(input('Digite o 2º número: '))

#Processamento
soma = num1 + num2
diferenca = num1 - num2
divisao = soma / diferenca

#Saída
print(f'\n>>> A divisão da soma: {soma} pela subtração: {diferenca} é {divisao:.1f}.')