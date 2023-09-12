#12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

def main():
    #Entrada
    numero = obter_numero_int('Informe um número inteiro: ')

    #Processamento
    numero_par_impar = par_impar(numero)

    #Saída
    print(f'\n>> O número {numero} é {numero_par_impar}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def par_impar(num):
    if (num % 2 == 0):
        return 'PAR'
    else:
        return 'ÍMPAR'
    
main()