#2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

def main():
    #Entrada
    numero1 = int(input('Informe o primeiro número: '))
    numero2 = int(input('Informe o segundo número: '))
    

    #Processamento
    num_maior, num_menor = maior_menor(numero1, numero2)

    #Saída
    print(f'\n>>> O maior número é {num_maior} e o menor é {num_menor}.')

def maior_menor(num1, num2):
    maior = 0
    menor = 0
    
    if (num1 > num2):
        maior = num1
        menor = num2
        
    elif (num1 < num2):
        maior = num2
        menor = num1
    
    return maior, menor
        
    
main()