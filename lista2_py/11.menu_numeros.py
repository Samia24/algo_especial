#11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3. 

def main():
    #Entrada
    numero1 = obter_numero_int('Informe o primeiro número: ')
    numero2 = obter_numero_int('Informe o segundo número: ')
    numero3 = obter_numero_int('Informe o terceiro número: ')
    print('\n>>>>> MENU <<<<<')
    print('(1) Mostrar o primeiro número digitado')
    print('(2) Mostrar o segundo número digitado')
    print('(3) Mostrar o terceiro número digitado')
    opcao = obter_numero_int('\nEscolha uma opção do menu: ')

    #Processamento
    menu = menu_numeros(opcao, numero1, numero2, numero3)

    #Saída
    if (opcao < 1 or opcao > 3):
        print(f'\nOPÇÃO INVÁLIDA!')
    else:
        print(f'\n>> A opção escolhida retorna o número: {menu}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def menu_numeros(opcao, num1, num2, num3):
    if (opcao == 1):
        return num1
    elif(opcao == 2):
        return num2
    elif(opcao == 3):
        return num3
    
main()