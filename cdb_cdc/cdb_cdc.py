
def calcular_tempo_ano(ano_vencimento):
    tempo_investimento = ano_vencimento - 2023
    return tempo_investimento

def juros_compostos(capital, taxa, tempo):
    return capital * ((1 + (taxa / 100)) ** tempo)

def main():
    print('>>>>> Bem-vindo(a) ao Simulador Bancário! <<<<<')

    valor_investido = float(input('Informe o valor investido: R$ '))
    taxa_cdb = float(input('Informe a taxa de juros do CDB (entre 1% e 20% ao ano): '))
    ano_vencimento = int(input('Informe período de vencimento em anos (AAAA): '))

    tempo_ano = calcular_tempo_ano(ano_vencimento) 

    montante_cdb = juros_compostos(valor_investido, taxa_cdb, tempo_ano)
    juros_recebidos = montante_cdb - valor_investido
    
    valor_total_a_sacar = valor_investido + juros_recebidos
    percentual_de_ganho = taxa_cdb * tempo_ano

    print('>>>>>>>>>> Resultado da Simulação de CDB <<<<<<<<<<')
    print(f'¬¬¬ Valor investido: R${valor_investido:.2f}')
    print(f'¬¬¬ Juros Recebidos: R${juros_recebidos:.2f}')
    print(f'¬¬¬ Total a sacar  : R${valor_total_a_sacar:.2f}')
    print(f'¬¬¬ Rendimento     : {percentual_de_ganho:.1f}%')
    print('\n-------------------------------')

    valor_emprestado = float(input('Informe o valor do empréstimo: R$ '))
    taxa_cdc = float(input('Informe o valor da taxa de juros mensal (% -> entre 1 e 17%): ')) / 100
    prazo_meses = int(input('Informe o prazo do empréstimo em meses (24x, 36x ou 60x): '))

    parcela = juros_compostos(valor_emprestado, taxa_cdc, prazo_meses)
    total_pago = parcela * prazo_meses
    juros_totais = total_pago - valor_emprestado
    
    print('\n>>>>>>>>>> Resultado da Simulação de CDC <<<<<<<<<<')
    print(f'¬¬¬ Valor total pago do Empréstimo ({prazo_meses}x): R$ {total_pago:.2f}')
    print(f'¬¬¬ Total de juros pagos ({prazo_meses}x)          : R$ {juros_totais:.2f}')
    print(f'¬¬¬ Valor da parcela mensal ({prazo_meses}x)       : R$ {parcela:.2f}')
    print('-----------------------------')


main()
