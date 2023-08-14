#27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

#Entrada
segundos = int(input('Informe a quantidade de segundos: '))

#Processamento
horas = segundos // 3600
resto = segundos % 3600
minutos = resto // 60
seg = resto % 60

#Saída
print(f'\n>>> O equivalente a essa quantidade de segundos é de {horas}h {minutos}min {seg}s.')