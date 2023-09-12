#8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos).

def main():
    #Entrada
    dia_atual = int(input('Informe o dia atual (DD): '))
    mes_atual = int(input('Informe o mês atual (MM): '))
    ano_atual = int(input('Informe o ano atual (AAAA): '))
    dia_nascimento = int(input('Informe o dia do seu nascimento (DD): '))
    mes_nascimento = int(input('Informe o mês do seu nascimento (MM): '))
    ano_nascimento = int(input('Informe o ano do seu nascimento (AAAA): '))

    #Processamento
    idade_anos = idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    #Saída
    print(f'\n>> Sua idade é de {idade_anos} anos.')


def idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento):
    idade = ano_atual - ano_nascimento

    if (mes_atual <= mes_nascimento and dia_atual < dia_nascimento):
        idade = idade - 1
        return idade
    else:
        return idade
    
main()
