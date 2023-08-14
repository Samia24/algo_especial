#40.lista1 - Calcule a quantidade de dinheiro gasta por um fumante. Dados de entrada: o número de anos que ele fuma, o nº de cigarros fumados por dia e o preço de uma carteira (1 carteira tem 20 cigarros).

#Entrada
anos = int(input('Informe há quantos anos você fuma:  '))
qtd_cig = int(input('Informe quantos cigarros você fuma por dia: '))
preco = int(input('Informe o preço da carteira de cigarros: '))

#Processamento
valor_uni = qtd_cig * preco / 20

dias = anos * 365

valor_tot = valor_uni * dias

#Saída
print(f'\n>>> O valor gasto por um fumante é de R${valor_tot:.2f}.')
