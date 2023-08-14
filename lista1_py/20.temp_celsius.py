#20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

#Entrada
temp_C = float(input('Informe a temperatura em graus celsius: '))

#Processamento
temp_F = (9 * temp_C + 160) / 5

#Saída
print(f'\n>>> A temperatura em Fahrenheit é de {temp_F:.1f}ºF.')