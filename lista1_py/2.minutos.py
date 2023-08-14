#2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

#Entrada
horas = int(input('Informe as horas: '))
minutos = int(input('Informe os minutos: '))

#Processamento
conv_horas = horas * 60
total_minutos = conv_horas + minutos

#Saída
print(f'\n>>> {horas}h e {minutos}min equivalem a {total_minutos}min.')
