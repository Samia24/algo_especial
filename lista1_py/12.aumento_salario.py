#12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.

#Entrada
salario = float(input('Informe seu salário: R$'))

#Processamento
novo_salario = salario + (salario * (25/100))

#Saída
print(f'\n>>> Seu novo salário com aumento de 25% é de R${novo_salario:.2f}.')