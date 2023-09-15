#25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não.

def main():
    #Entrada
    senha = obter_numero_int('Informe uma senha de 4 dígitos: ')
    
    #Processamento
    validacao_senha = validar_senha(senha)

    #Saída
    print(f'\n>>> A senha informada foi {senha}.\n\n>>>>> {validacao_senha} <<<<<\n')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def validar_senha(senha):
    primeiro_digito = senha // 1000
    resto = senha % 1000
    segundo_digito = resto // 100
    resto2 = resto % 100
    terceiro_digito = resto2 // 10
    quarto_digito = resto2 % 10

    if(primeiro_digito == 1 and segundo_digito == 2 and terceiro_digito == 3 and quarto_digito == 4):
        return 'ACESSO PERMITIDO'
    else:
        return 'ACESSO NEGADO'

main()