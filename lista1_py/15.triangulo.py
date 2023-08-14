#15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

#Entrada
base = float(input('Informe o valor da base de um triângulo: '))
altura = float(input('Informe o valor da altura de um triângulo: '))

#Processamento
area = (base * altura) / 2

#Saída
print(f'\n>>> A área do triângulo é de {area:.1f}cm.')