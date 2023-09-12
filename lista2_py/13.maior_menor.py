#13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.

def main():
    #Entrada
    numero1 = obter_numero_int('Informe o primeiro número: ')
    numero2 = obter_numero_int('Informe o segundo número: ')
    numero3 = obter_numero_int('Informe o terceiro número: ')
    numero4 = obter_numero_int('Informe o quarto número: ')
    numero5 = obter_numero_int('Informe o quinto número: ')

    #Processamento
    num_maior_menor = maior_menor(numero1, numero2, numero3, numero4, numero5)

    #Saída
    print(num_maior_menor)
    
def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def maior_menor(num1, num2, num3, num4, num5):
    maior = num1
    menor = num1
    if (num1 != num2 and num1 != num3 and num1 != num4 and num1 != num5 and num2 != num3 and num2 != num4 and num2 != num5 and num3 != num4 and num3 != num5 and num4 != num5):
        if (num2 > maior):
            maior = num2
        if (num3 > maior):
            maior = num3
        if (num4 > maior):
            maior = num4
        if (num5 > maior):
            maior = num5
        if (num2 < menor):
            menor = num2
        if (num3 < menor):
            menor = num3
        if (num4 < menor):
            menor = num4
        if (num4 < menor):
            menor = num5
        
        return f'\n>>> O maior número é {maior} e o menor é {menor}.'
    else:
        return '\nInforme números diferentes!'
    
    
main()