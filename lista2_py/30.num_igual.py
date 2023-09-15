#30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo: 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025. 

def main():
    #Entrada
    numero = obter_numero_int('Informe um número de 4 dígitos: ')
    
    #Processamento
    eh_mesmo_numero= num_original(numero)

    #Saída
    print(f'\n>>> O número {numero} quando separado em: \nMilhar e centena, dezena e unidade, ao somar-se e elevar essa soma ao quadrado,\n O resultado é >> {eh_mesmo_numero}.')

def obter_numero_int(descricao):
    numero = int(input(descricao))
    return numero

def num_original(num):
    num_ini = num // 100
    num_fin = num % 100
    soma = num_ini + num_fin
    quadrado = soma ** 2

    if (num == quadrado):
        return f'{quadrado}, que É o mesmo VALOR INICIAL'
    else:
        return f' {quadrado}, que NÃO é o mesmo VALOR INICIAL'    

main()