#31.lista1 - Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

#Entrada
num = int(input('Informe um número inteiro de 4 dígitos: '))

#Processamento
milhar = num // 1000
resto1 = num % 1000 

centena = resto1 // 100
resto2 = resto1 % 100

dezena = resto2 // 10
unidade = resto2 % 10

#Convertendo para base decimal
decimal = (unidade * (2 ** 0)) + (dezena * (2 ** 1)) + (centena * (2 ** 2)) + (milhar * (2 ** 3))

#Saída
print(f'\nMilhar: {milhar}')
print(f'Centena: {centena}')
print(f'Dezena: {dezena}')
print(f'Unidade: {unidade}')
print(f'\n>>> O número binário digitado pelo usuário {milhar}{centena}{dezena}{unidade}, convertido para base decimal equivale a {decimal}.')

