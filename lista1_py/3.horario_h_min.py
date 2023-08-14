#3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

#Entrada
minutos = int(input('Informe o horário em minutos: '))

#Processamento
horas = minutos // 60
min = minutos % 60

#Saída
print(f'\n>>> O horário de {minutos}min equivale a {horas}h e {min}min.')