#30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

#Entrada
minutos = int(input('Informe a quantidade de minutos: '))

#Processamento
dias = minutos // 1440
resto = minutos % 1440
horas = resto // 60
min = resto % 60

#Saída
print(f'\n>>> O equivalente a essa quantidade de minutos é de {dias} dia(s), {horas}h e {min}min.')