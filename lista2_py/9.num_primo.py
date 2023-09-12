#9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

def main():
    #Entrada
    numero = obter_numero_int('Informe um número entre 0 e 100: ')
    
    #Processamento
    eh_primo = numero_primo(numero)

    #Saída
    print(f'\n>> O número {numero} {eh_primo}')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def numero_primo(num):
    if (num > 1 and num <= 100):
        if (num == 2 or num == 3 or num == 5 or num == 7):
            return 'É PRIMO.'
        elif (num % 1 == 0 and num % num == 0 and num % 2 != 0 and num % 3 != 0 and num % 5 != 0 and num % 7 != 0):
            return 'É PRIMO.'
        else:
            return 'NÃO É PRIMO.'
    else:
        return 'não é válido para verificação! Informe um número entre 2 e 100.'
    

main()
