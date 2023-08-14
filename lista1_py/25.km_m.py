#25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

#Entrada
metros = float(input('Informe um valor em metros: '))

#Processamento
km = metros // 1000
m = metros % 1000

#Saída
print(f'\n>>> O valor equivalente é de {km:.0f}km e {m:.1f}m.')