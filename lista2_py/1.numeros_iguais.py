#1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

def main():
    #Entrada
    numero1 = int(input('Informe o primeiro número: '))
    numero2 = int(input('Informe o segundo número: '))
    numero3 = int(input('Informe o terceiro número: '))

    #Processamento
    qtd_iguais = numeros_iguais(numero1, numero2, numero3)

    #Saída
    print(f'\n>>> A quantidade de números iguais é {qtd_iguais}.')

def numeros_iguais(num1, num2, num3):
    qtd_num_iguais = 0
    if (num1 == num2 != num3 or num2 == num3 != num1 or num1 == num3 != num2):
        qtd_num_iguais += 2
        return qtd_num_iguais
    elif (num1 == num2 == num3):
        qtd_num_iguais += 3
        return qtd_num_iguais
    else:
        return qtd_num_iguais

main()