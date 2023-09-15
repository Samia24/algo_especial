#20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.

def main():
    #Entrada
    angulo = obter_numero_float('Informe um ângulo entre 0º e 360º: ')
    
    #Processamento
    classificacao = classif_quadrante(angulo)

    #Saída
    print(f'\n>>> O ângulo de {angulo:.0f}º está localizado no {classificacao} quadrante. <<<')

def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def classif_quadrante(angulo):
    if (angulo <= 90):
        return 'PRIMEIRO'
    elif (90 < angulo <= 180):
        return 'SEGUNDO'
    elif (180 < angulo <= 270):
        return 'TERCEIRO'
    elif (270 < angulo <= 360):
        return 'QUARTO'
    
main()
