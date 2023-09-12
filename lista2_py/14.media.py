#14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

def main():
    #Entrada
    numero1 = obter_numero_int('Informe o primeiro número: ')
    numero2 = obter_numero_int('Informe o segundo número: ')
    numero3 = obter_numero_int('Informe o terceiro número: ')
    numero4 = obter_numero_int('Informe o quarto número: ')
    numero5 = obter_numero_int('Informe o quinto número: ')

    #Processamento
    media_numeros = media(numero1, numero2, numero3, numero4, numero5)
    
    
    #Saída
    print(f'\n>> A média dos números é: {media_numeros}.')
    print(f'Os números maiores que a média são: ')
    if (numero1 > media_numeros):
        print(f'{numero1}')
    if (numero2 > media_numeros):
        print(f'{numero2}')
    if (numero3 > media_numeros):
        print(f'{numero3}')
    if (numero4 > media_numeros):
        print(f'{numero4}')
    if (numero5 > media_numeros):
        print(f'{numero5}')
    print('<<')
    
def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def media(num1, num2, num3, num4, num5):
    qtd_num = 5
    media_num = (num1 + num2 + num3 + num4 + num5)/qtd_num
    return media_num

main()