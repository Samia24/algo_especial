#4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.

def main():
    #Entrada
    numero = int(input('Informe um número com dois dígitos: '))
   
    #Processamento
    resultado = dez_uni(numero)

    #Saída
    print(f'\n>>> O algarismo da dezena é {resultado} ao da unidade.')

def dez_uni(num):

    dezena = num // 10
    unidade = num % 10
           
    if (dezena == unidade):
        return 'igual'   
    else:
        return 'diferente'
        
    
main()