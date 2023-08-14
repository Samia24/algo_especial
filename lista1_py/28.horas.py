#28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

#Entrada
horas = int(input('Informe a quantidade de horas: '))

#Processamento
semanas = horas // 168
resto = horas % 168
dias = resto // 24
h = resto % 24

#Saída
print(f'\n>>> O equivalente a essa quantidade de horas é de {semanas} semana(s), {dias} dias e {h} hora(s).')