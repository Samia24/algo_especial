#21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso contrario, é arredondado para o inteiro imediatamente inferior. 

import math

def main():
    #Entrada
    numero = obter_numero_float('Informe um número: ')
    
    #Processamento
    arredondamento = arredondar_numero(numero)

    #Saída
    print(f'\n>>> O número {numero} arredondado é {arredondamento}. <<<')

def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def arredondar_numero(num):
    num_int = math.trunc(num)
    num_frac = num - num_int

    if (num_frac < 0.5):
        return num_int
    else:
        num_int += 1
        return num_int 
main()