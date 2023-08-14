#34.lista1 - Leia 3 números, calcule e escreva a média dos números.

#Entrada
num1 = int(input('Informe o primeiro número: '))
num2 = int(input('Informe o segundo número: '))
num3 = int(input('Informe o terceiro número: '))

#Processamento
media = (num1 + num2 + num3) / 3

#Saída
print(f'\n>>> A média dos números {num1}, {num2} e {num3} é >>> {media:.1f}.')