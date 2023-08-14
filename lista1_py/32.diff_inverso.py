#32.lista1 - Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

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
sub = abs(num - (int(inverso)))

#Saída
print(f'\n>>> O número digitado pelo usuário é {num}, e o seu inverso é {inverso}. \nA subtração desses dois números é igual a {sub}.')

