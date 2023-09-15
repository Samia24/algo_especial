#27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual.

def main():
    #Entrada
    dia_atual = int(input('Informe o dia atual (DD): '))
    mes_atual = int(input('Informe o mês atual (MM): '))
    ano_atual = int(input('Informe o ano atual (AAAA): '))
    dia_nascimento = int(input('Informe o dia do seu nascimento (DD): '))
    mes_nascimento = int(input('Informe o mês do seu nascimento (MM): '))
    ano_nascimento = int(input('Informe o ano do seu nascimento (AAAA): '))

    #Processamento
    id_anos, id_meses, id_dias = idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    #Saída
    print(f'\n>> Sua idade é de {id_anos} anos, {id_meses} meses e {id_dias} dias.')


def idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento):
    if (mes_atual < mes_nascimento and dia_atual < dia_nascimento):
        idade_a = (ano_atual - ano_nascimento) - 1
        idade_m = 12 - (abs(mes_atual - mes_nascimento))
        idade_d = abs(dia_atual - dia_nascimento)
        return idade_a, idade_m, idade_d
    elif (mes_atual < mes_nascimento and dia_atual > dia_nascimento):
        idade_a = (ano_atual - ano_nascimento) - 1
        idade_m = 12 - ((abs(mes_atual - mes_nascimento)) - 1)
        if (mes_atual == 4 or mes_atual == 6 or mes_atual == 9 or mes_atual == 11):
            idade_m = 12 - (abs(mes_atual - mes_nascimento))
            idade_d = 30 - (abs(dia_atual - dia_nascimento))
            return idade_a, idade_m, idade_d
        elif(mes_atual == 2):
            idade_m = 12 - (abs(mes_atual - mes_nascimento))
            if (ano_atual % 4 == 0 and ano_atual % 100 == 0 and ano_atual % 400 == 0):
                idade_d = 29 - (abs(dia_atual - dia_nascimento))
                return idade_a, idade_m, idade_d
            elif(ano_atual % 4 == 0 and ano_atual % 100 != 0):
                idade_d = 29 - (abs(dia_atual - dia_nascimento))
                return idade_a, idade_m, idade_d
        else:
            idade_d = 31 - (abs(dia_atual - dia_nascimento))
            return idade_a, idade_m, idade_d
    elif (mes_atual == mes_nascimento and dia_atual < dia_nascimento):
        idade_m = abs(mes_atual - mes_nascimento)
        idade_a = (ano_atual - ano_nascimento) - 1
        return idade_a, idade_m, idade_d
    elif (mes_atual == mes_nascimento and dia_atual == dia_nascimento):
        idade_a = (ano_atual - ano_nascimento)
        idade_m = abs(mes_atual - mes_nascimento)
        idade_d = abs(dia_atual - dia_nascimento)
        return idade_a, idade_m, idade_d
    else:
        idade_a = (ano_atual - ano_nascimento)
        idade_m = (abs(mes_atual - mes_nascimento)) - 1
        if (mes_atual == 4 or mes_atual == 6 or mes_atual == 9 or mes_atual == 11):
            idade_d = 30 - (abs(dia_atual - dia_nascimento))
            return idade_a, idade_m, idade_d
        elif(mes_atual == 2):
            if (ano_atual % 4 == 0 and ano_atual % 100 == 0 and ano_atual % 400 == 0):
                idade_d = 29 - (abs(dia_atual - dia_nascimento))
                return idade_a, idade_m, idade_d
            elif(ano_atual % 4 == 0 and ano_atual % 100 != 0):
                idade_d = 29 - (abs(dia_atual - dia_nascimento))
                return idade_a, idade_m, idade_d
        else:
            idade_d = 31 - (abs(dia_atual - dia_nascimento))
            return idade_a, idade_m, idade_d
    
main()
