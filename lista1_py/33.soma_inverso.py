#33.lista1 - Leia um número inteiro (3 dígitos), calcule e escreva a soma do número com seu inverso. (Ex.: número = 532 ; inverso = 235 ; soma = 532 + 235 = 767).

#Entrada
num = int(input('Informe um número inteiro de 3 dígitos: '))

#Processamento
centena = num // 100
resto = num % 100 

dezena = resto // 10
unidade = resto % 10

uni = str(unidade)
dez = str(dezena)
cen = str(centena)

inverso = uni + dez + cen
soma = num + (int(inverso))

#Saída
print(f'\n>>> O número digitado pelo usuário é {num}, e o seu inverso é {inverso}. \nA soma desses dois números é igual a {soma}.')

