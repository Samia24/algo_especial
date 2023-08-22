def calcular_juros_cdb(principal, taxa, anos):
    return principal * (1 + taxa/100)**anos

def calcular_juros_cdc(principal, taxa, meses):
    return principal * (1 + taxa/100)**meses

def calcular_lucro_banco_cdb(valor_cdb, taxa_cdb, anos_cdb, taxa_cdc, meses_cdc):
    juros_cdb = calcular_juros_cdb(valor_cdb, taxa_cdb, anos_cdb)
    juros_cdc = calcular_juros_cdc(valor_cdb, taxa_cdc, meses_cdc)
    return juros_cdc - juros_cdb

def calcular_lucro_banco_cdc(valor_cdc, taxa_cdb, anos_cdb, taxa_cdc, meses_cdc):
    juros_cdb = calcular_juros_cdb(valor_cdc, taxa_cdb, anos_cdb)
    juros_cdc = calcular_juros_cdc(valor_cdc, taxa_cdc, meses_cdc)
    return juros_cdc - juros_cdb


def main():
    print("\n--------- Simulador de Investimento em CDB ---------")
    valor_investido = float(input("Informe o valor do investimento em CDB: R$ "))
    taxa_cdb = float(input("Informe a taxa de juros anual do CDB (entre 1% e 20%): "))
    anos_cdb = int(input("Informe o ano de vencimento (AAAA): "))

    tempo_anos = anos_cdb - 2023
    
    montante_cdb = calcular_juros_cdb(valor_investido, taxa_cdb, tempo_anos)
    rendimento_cdb = montante_cdb - valor_investido

    print(f"\n>>>>>>>>> RESULTADO CDB <<<<<<<<<<")
    print(f"O valor a ser pago ao investidor ao final do período é: R$ {montante_cdb:.2f}")
    print(f"O rendimento do CDB é: R$ {rendimento_cdb:.2f}")

    print("\n--------- Simulador de Empréstimo CDC ---------")
    valor_emprestimo = float(input("Informe o valor do empréstimo CDC: R$ "))
    taxa_cdc = float(input("Informe a taxa de juros mensal do CDC (entre 1% e 17%): "))
    meses_cdc = int(input("Informe o prazo do empréstimo em meses (24x, 36x ou 60x): "))
    
    juros_total_cdc = calcular_juros_cdc(valor_emprestimo, taxa_cdc, meses_cdc)
    valor_total_cdc = valor_emprestimo + juros_total_cdc
    valor_parcelas = juros_total_cdc / meses_cdc
    
    print(f"\n>>>>>>>>> RESULTADO CDC <<<<<<<<<<")
    print(f"Valor total a ser pago pelo cliente no CDC: R$ {valor_total_cdc:.2f}")
    print(f"O valor total de juros a ser pago pelo cliente é: R$ {juros_total_cdc:.2f}")
    print(f"O valor das parcelas mensais é: R$ {valor_parcelas:.2f}")


    lucro_banco_cdb = calcular_lucro_banco_cdb(montante_cdb, taxa_cdb, tempo_anos, taxa_cdc, meses_cdc)
    lucro_banco_cdc = calcular_lucro_banco_cdc(valor_emprestimo, taxa_cdb, tempo_anos, taxa_cdc, meses_cdc)

    print(f"\n>>>>>>>>> LUCROS <<<<<<<<<<")
    print(f"Lucro do banco com investimento em CDB: R$ {lucro_banco_cdb:.2f}")
    print(f"Lucro do banco com empréstimo CDC: R$ {lucro_banco_cdc:.2f}")

main()
