#4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).

#Entrada 
valor_dolar = float(input('Informe o valor do dólar: '))
valor = float(input('Informe um valor em dólar: '))

#Processamento
valor_real = valor * valor_dolar

#Saída
print(f'\n>>> O equivalente do valor em dólar para reais é de R${valor_real:.2f}.')