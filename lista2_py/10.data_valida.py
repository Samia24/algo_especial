#10. Leia uma data (dia, mês e ano), verifique e escreva se a data é ou não válida.


def main():
    #Entrada
    dia_atual = obter_numero_int('Informe o dia atual (DD): ')
    mes_atual = obter_numero_int('Informe o mês atual (MM): ')
    ano_atual = obter_numero_int('Informe o ano atual (AAAA): ')

    #Processamento
    data_valida = data_atual(dia_atual, mes_atual, ano_atual)

    #Saída
    print(f'\n>>> A data {dia_atual}/{mes_atual}/{ano_atual} {data_valida}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def data_atual(dia_atual, mes_atual, ano_atual):
    data_val = 'é válida'
    if (mes_atual < 1 or mes_atual > 12):
        data_val = 'não é válida'
    else:
        if (dia_atual < 1 or dia_atual > 31):
            data_val = 'não é válida'
        elif (mes_atual == 4 or mes_atual == 6 or mes_atual == 9 or mes_atual == 11):
            if (dia_atual > 30):
                data_val = 'não é válida'
        elif (mes_atual == 2):
            if (dia_atual < 1 or dia_atual > 29):
                data_val = 'não é válida'
            elif (dia_atual == 29):
                if (ano_atual % 4 == 0 and ano_atual % 100 == 0 and ano_atual % 400 == 0):
                    data_val = 'é válida'
                elif (ano_atual % 4 == 0 and ano_atual % 100 != 0):
                    data_val = 'é válida'
                else:
                    data_val = 'não é válida'
            elif(dia_atual > 1 or dia_atual <= 28):
                data_val = 'é válida'
    return data_val

main()