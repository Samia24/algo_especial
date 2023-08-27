def main():
    #Pedir dados CDB
    print('\n>>>>> SIMULADOR DE CDB <<<<<')
    valor_investido = float(input('Informe o valor investido: R$ '))
    taxa_cdb = float(input('Informe o valor da taxa do CDB (entre 1% e 20%): '))
    ano_a_sacar = float(input('Informe o ano para saque do valor investido (AAAA): '))

    #Calcular juros CDB
    tempo = calcular_tempo_anos(ano_a_sacar)
    montante_cdb = calcular_juros_compostos(valor_investido, taxa_cdb, tempo)
    juros_cdb = montante_cdb - valor_investido
    valor_a_sacar = valor_investido + juros_cdb
    rendimento_cdb = (juros_cdb / valor_investido) * 100

    #Mostrar dados CDB
    print('\n>>>>>>>>>> RESULTADO CDB <<<<<<<<<<')
    print(f'---> Valor investido inicialmente no CDB                  : R$ {valor_investido:.2f}.')
    print(f'---> Valor total investido no CDB somado aos juros obtidos: R$ {valor_a_sacar:.2f}.')
    print(f'---> Juros do CDB                                         : R$ {juros_cdb:.2f}.')
    print(f'---> Rendimento do investimento (%)                       : {rendimento_cdb:.1f}%.')
    print('--------------------------------------------')

    #Pedir dados CDC
    print('\n>>>>> SIMULADOR DE CDC <<<<<')
    taxa_cdc = float(input('Informe o valor da taxa do CDB (entre 1% e 17%): '))
    valor_emprestado = valor_investido
    prazo_meses = calcular_tempo_meses(ano_a_sacar)

    #Calcular juros CDC
    montante_cdc = calcular_juros_compostos(valor_emprestado, taxa_cdc, prazo_meses)
    juros_cdc = montante_cdc - valor_emprestado
    valor_a_pagar = valor_emprestado + juros_cdc
    rendimento_cdc = (juros_cdc / valor_emprestado) * 100
    parcela = valor_a_pagar / prazo_meses

    #Mostrar dados CDC
    print('\n>>>>>>>>>> RESULTADO CDC <<<<<<<<<<')
    print(f'---> Valor do empréstimo inicial no CDC                   : R$ {valor_emprestado:.2f}.')
    print(f'---> Valor total emprestado no CDC somado aos juros       : R$ {valor_a_pagar:.2f}.')
    print(f'---> Juros do CDC                                         : R$ {juros_cdc:.2f}.')
    print(f'---> Rendimento do empréstimo (%)                         : {rendimento_cdc:.1f}%.')
    print(f'---> Valor das parcelas                                   : {prazo_meses:.0f} x R$ {parcela:.2f}.')
    print('--------------------------------------------')

    #Lucros do banco
    lucro_banco = juros_cdc - juros_cdb
    
    print('\n>>>>>>>>>> LUCROS DO BANCO <<<<<<<<<<')
    print(f'---> Lucro do banco: R$ {lucro_banco:.2f}.\n')


    

def calcular_tempo_anos(ano):
    return ano - 2023

def calcular_tempo_meses(ano):
    return (calcular_tempo_anos(ano) * 12)

def calcular_juros_compostos(capital, taxa, tempo):
    return capital * ((1 + (taxa/100)) ** tempo)

main()