#21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

#Entrada
temp_F = float(input('Informe a temperatura em graus Fahrenheit: '))

#Processamento
temp_C = (5 * temp_F - 160) / 9

#Saída
print(f'\n>>> A temperatura em graus Celsius é de {temp_C:.1f}ºC.')