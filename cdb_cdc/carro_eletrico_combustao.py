#Carro Elétrico / Combustão

#Entrada
distancia_total = float(input('Informe a distância total prevista, em Km, da viagem: '))
perc_motor_eletrico = float(input('Informe o percentual (%) da viagem usando o motor elétrico: '))
km_litro_alcool = float(input('Informe quantos Km seu carro faz com 1L de álcool: '))
km_litro_gasolina = float(input('Informe quantos Km seu carro faz com 1L de gasolina: '))
valor_litro_alcool = float(input('Informe o valor do litro de álcool: R$ '))
valor_litro_gasolina = float(input('Informe o valor do litro de gasolina: R$ '))

#Processamento
km_motor_eletrico = (distancia_total * perc_motor_eletrico) / 100
km_restante = distancia_total - km_motor_eletrico

qtd_litro_gasolina = km_restante / km_litro_gasolina
valor_gasto_gasolina = valor_litro_gasolina * qtd_litro_gasolina

qtd_litro_alcool = km_restante / km_litro_alcool
valor_gasto_alcool = valor_litro_alcool * qtd_litro_alcool

#Saída
print('\n>>>>>>>>>> TABELA COMPARATIVA <<<<<<<<<<')
print('\n-----> ABASTECIMENTO À GASOLINA <-----')
print(f'°°° A quantidade de litros de gasolina necessária para completar {km_restante}km da viagem é de {qtd_litro_gasolina:.1f}L.')
print(f'°°° O valor necessário de abastecimento a gasolina é de R$ {valor_gasto_gasolina:.2f}.')
print('\n-------------------------------------------------------------------------------------------------------------')
print('\n-----> ABASTECIMENTO À ÁLCOOL <-----')
print(f'°°° A quantidade de litros de álcool necessária para completar {km_restante}km da viagem é de {qtd_litro_alcool:.1f}L.')
print(f'°°° O valor necessário de abastecimento a álcool é de R$ {valor_gasto_alcool:.2f}.\n')