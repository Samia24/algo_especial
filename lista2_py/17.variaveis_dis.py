#17. Leia valores inteiros em duas variáveis distintas e se o resto da divisão da primeira pela segunda for 1 escreva a soma dessas variáveis mais o resto da divisão; se for 2 escreva se o primeiro e o segundo valor são pares ou ímpares; se for igual a 3 multiplique a soma dos valores lidos pelo primeiro; se for igual a 4 divida a soma dos números lidos pelo segundo, se este for diferente de zero. Em qualquer outra situação escreva o quadrado dos números lidos. 

def main():
    #Entrada
    valor1 = obter_numero_int('Digite a variável 1: ')
    valor2 = obter_numero_int('Digite a variável 2: ')
    
    #Processamento
    result = resultado(valor1, valor2)
    
    #Saída
    print(result)
    
def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def resultado(valor1, valor2):
    resto_divisao = valor1 % valor2
    print(f'\n-> O resto da divisão é {resto_divisao}.')

    if (resto_divisao == 1):
        soma = (valor1 + valor2) + resto_divisao
        return f'Quando o resto da divisão é 1. O resultado esperado é {soma}.'
    elif (resto_divisao == 2):
        if(valor1 % 2 == 0):
            print(f'O número {valor1} é par.')
        if (valor1 % 2 != 0):
            print(f'O número {valor1} é ímpar.')
        if(valor2 % 2 == 0):
            print(f'O número {valor2} é par.')
        if(valor2 % 2 != 0):
            print(f'O número {valor2} é ímpar.')
        
    elif (resto_divisao == 3):
        multiplicacao = (valor1 + valor2) * valor1
        return f'Quando o resto da divisão é 3. O resultado esperado é {multiplicacao}.'
    elif (resto_divisao == 4):
        if (valor2 != 0):
            div = (valor1 + valor2) / valor2
            return f'Quando o resto da divisão é 4. O resultado esperado é {div}.'
    else:
        quadrado1 = valor1 ** 2
        quadrado2 = valor2 ** 2
        return f'Quando o resto da divisão é diferente de 1, 2, 3 ou 4. O resultado esperado é o quadrado dos dois números:\n O quadrado de {valor1} é {quadrado1}.\nE o quadrado de {valor2} é {quadrado2}.'

main()
    