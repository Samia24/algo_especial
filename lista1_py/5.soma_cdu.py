#5. Leia um número inteiro (3 dígitos), calcule e escreva a soma de seus elementos (C + D + U).

#Entrada
numero = int(input('Informe um número inteiro de 3 dígitos: '))

#Processamento
centena = numero // 100
resto = numero % 100
dezena = resto // 10
unidade = resto % 10

soma = centena + dezena + unidade

#Saída
print(f'\n >>> A soma de {centena} + {dezena} + {unidade} é {soma}.')