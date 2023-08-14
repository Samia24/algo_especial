#26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

#Entrada
dias = int(input('Informe a quantidade de dias: '))

#Processamento
semanas = dias // 7
d = dias % 7

#Saída
print(f'\n>>> O equivalente a essa quantidade de dias é de {semanas} semana(s) e {d} dia(s).')