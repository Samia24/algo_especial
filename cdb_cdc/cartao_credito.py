def main():
    #Pedir dados
    print('\n>>>>> CÁLCULO DE JUROS DE CARTÃO DE CRÉDITO ROTATIVO <<<<<')
    valor_fatura = float(input('Informe o valor da fatura: R$ '))
    taxa_rotativo = float(input('Informe o valor da taxa de crédito rotativo (%): '))
    
    #Entrada de dados do Plano 1
    print('\n---- Plano 1 ----')
    valor_pago1 = float(input('Informe o valor pago: R$ '))
    meses_em_atraso1 = int(input('Informe a quantidade de meses em atraso para pagamento total da fatura: '))
    
    #Calcula os dados para Plano 1
    capital_1 = (valor_fatura - valor_pago1)
    montante_1 = calcular_juros_compostos(capital_1, taxa_rotativo, meses_em_atraso1)
    juros_1 = montante_1 - capital_1
    valor_total_1 = capital_1 + juros_1

    #Entrada de dados do Plano 2
    print('\n---- Plano 2 ----')
    valor_pago2 = float(input('Informe o valor pago: R$ '))
    meses_em_atraso2 = int(input('Informe a quantidade de meses em atraso para pagamento total da fatura: '))

    #Calcula os dados para Plano 2
    capital_2 = (valor_fatura - valor_pago2)
    montante_2 = calcular_juros_compostos(capital_2, taxa_rotativo, meses_em_atraso2)
    juros_2 = montante_2 - capital_2
    valor_total_2 = capital_2 + juros_2

    #Mostrar valores do plano 1
    print('\n>>>>> RESULTADO PLANO 1 <<<<<')
    print(f'Valor da fatura            : R$ {valor_fatura:.2f}.')
    print(f'Valor pago                 : R$ {valor_pago1:.2f}.')
    print(f'Meses em atraso            : {meses_em_atraso1} meses.')
    print(f'Juros sob o débito pendente: R$ {juros_1:.2f}.')
    print(f'Saldo devedor (sem juros)  : R$ {capital_1:.2f}.')
    print(f'---> Fatura em {meses_em_atraso1} meses será de R$ {valor_total_1:.2f}.')


    #Mostrar valores do plano 2
    print('\n>>>>> RESULTADO PLANO 2 <<<<<')
    print(f'Valor da fatura            : R$ {valor_fatura:.2f}.')
    print(f'Valor pago                 : R$ {valor_pago2:.2f}.')
    print(f'Meses em atraso            : {meses_em_atraso2} meses.')
    print(f'Juros sob o débito pendente: R$ {juros_2:.2f}.')
    print(f'Saldo devedor (sem juros)  : R$ {capital_2:.2f}.')
    print(f'---> Fatura em {meses_em_atraso2} meses será de R$ {valor_total_2:.2f}.')

    
def calcular_juros_compostos(capital, taxa, tempo):
    return capital * ((1 + taxa/100)**tempo)

main()