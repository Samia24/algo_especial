#29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

#Entrada
meses = int(input('Informe a quantidade de meses: '))

#Processamento
anos = meses // 12
mes = meses % 12

#Saída
print(f'\n>>> O equivalente a essa quantidade de meses é de {anos} ano(s) e {mes} mes(es).')