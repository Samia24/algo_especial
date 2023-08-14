#11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)

#Entrada
numero = int(input('Informe um número inteiro de 3 dígitos: '))

#Processamento
centena = numero // 100
resto = numero % 100
dezena = resto // 10
unidade = resto % 10

#Saída
print(f'\n >>> O inverso de {centena}{dezena}{unidade} é {unidade}{dezena}{centena}.')