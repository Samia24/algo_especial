#44. Sabendo que latão é constituído de 70% de cobre e 30% de zinco, escreva um algoritmo que calcule a quantidade de cada um desses componentes para se obter certa quantidade de latão (em kg), informada pelo usuário.

#Entrada
qtd_latao = int(input('Informe a quantidade de latão: '))

#Processamento
cobre = qtd_latao * 0.70
zinco = qtd_latao * 0.30

#Saída
print(f'\n>>> A quantidade de cobre é de {cobre:.1f} e a de zinco é de {zinco:.1f}, que compõem o latão.')

