#35.lista1 - Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

#Entrada
numero = int(input('Número: ')) 

#Processamento 
milhar = numero // 1000 
resto1 = numero % 1000 

centena = resto1 // 100 
resto2 = resto1 % 100

dezena = resto2 // 10 
unidade = resto2 % 10

soma = milhar + centena + dezena + unidade

#Saída
print(f'\n >>> Soma: {soma}.')