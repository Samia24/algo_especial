#23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

#Entrada
kg = float(input('Informe um valor em quilogramas: '))

#Processamento
gramas = kg * 1000

#Saída
print(f'\n>>> O valor equivalente em gramas é de {gramas:.1f}g.')