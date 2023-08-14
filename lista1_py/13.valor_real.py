#13. Leia um valor em real (R$), calcule e escreva 70% deste valor.

#Entrada
valor = float(input('Informe um valor em reais: R$'))

#Processamento
novo_valor = valor * (70/100)

#Saída
print(f'\n>>> 70% de R${valor:.2f} é R${novo_valor:.2f}.')