#3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

def main():
    #Entrada
    numero1 = int(input('Informe o primeiro número: '))
    numero2 = int(input('Informe o segundo número: '))
    numero3 = int(input('Informe o terceiro número: '))
    

    #Processamento
    num_maior = maior(numero1, numero2, numero3)

    #Saída
    print(f'\n>>> O maior número é {num_maior}.')

def maior(num1, num2, num3):
    maior = 0
        
    if (num1 > num2 > num3):
        maior = num1   
    elif (num2 > num1 > num3):
        maior = num2
    else:
        maior = num3
    return maior
        
    
main()