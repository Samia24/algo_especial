#5. Leia 3 (três) números e escreva-os em ordem crescente.

def main():
    #Entrada
    numero1 = int(input('Informe o primeiro número: '))
    numero2 = int(input('Informe o segundo número: '))
    numero3 = int(input('Informe o terceiro número: '))
    

    #Processamento
    num_menor, num_interm, num_maior = ordem_crescente(numero1, numero2, numero3)

    #Saída
    print(f'\n>>> A ordem crescente é {num_menor}, {num_interm} e {num_maior}.')

def ordem_crescente(num1, num2, num3):
    
    if (num1 > num2 and num1 > num3 and num2 > num3):
        maior = num1
        intermediario = num2
        menor = num3    
    elif (num1 < num2 and num1 < num3 and num2 < num3):
        maior = num3
        intermediario = num2
        menor = num1
    elif (num1 < num2 and num1 > num3 and num2 > num3):
        maior = num2
        intermediario = num1
        menor = num3
    elif (num1 < num3 and num1 > num2 and num2 < num3):
        maior = num3
        intermediario = num1
        menor = num2
    elif (num3 < num2 and num3 > num1 and num2 > num1):
        maior = num2
        intermediario = num3
        menor = num1
    elif (num3 < num1 and num3 > num2 and num2 < num1):
        maior = num1
        intermediario = num3
        menor = num2
    
    return menor, intermediario, maior
        
    
main()