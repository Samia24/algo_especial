#23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente.

def main():
    #Entrada
    dia_1 = obter_numero_int('Informe o dia 1 (DD): ')
    mes_1 = obter_numero_int('Informe o mês 1 (MM): ')
    ano_1 = obter_numero_int('Informe o ano 1 (AAAA): ')
    dia_2 = obter_numero_int('Informe o dia 2 (DD): ')
    mes_2 = obter_numero_int('Informe o mês 2 (MM): ')
    ano_2 = obter_numero_int('Informe o ano 2 (AAAA): ')

    #Processamento
    dia_rec, mes_rec, ano_rec = data_recente(dia_1, mes_1, ano_1, dia_2, mes_2, ano_2)

    #Saída
    print(f'\n>>> A data mais recente é {dia_rec}/{mes_rec}/{ano_rec}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def data_recente(dia1, mes1, ano1, dia2, mes2, ano2):
    if (ano1 <= ano2):
        if (mes1 <= mes2):
            if(dia1 < dia2):
                return dia2, mes2, ano2
            else:
                return dia1, mes1, ano1
        else:
                return dia1, mes1, ano1
    else:
                return dia1, mes1, ano1    
main()