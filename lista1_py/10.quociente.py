#10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.

#Entrada
num1 = int(input('Digite o 1º número: '))
num2 = int(input('Digite o 2º número: '))

#Processamento 
quociente = num1 // num2
resto = num1 % num2

#Saída
print(f'\n>>> O quociente da divisão de {num1} por {num2} é {quociente} e o resto é {resto}.')