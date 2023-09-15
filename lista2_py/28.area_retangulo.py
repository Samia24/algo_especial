#28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área não pode ser negativo.

def main():
    #Entrada
    x = obter_numero_float('Informe o valor de x: ')
    if (x < 0):
        x = obter_numero_float('Informe um valor positivo! Digite novamente um valor para x: ')
    y = obter_numero_float('Informe o valor de y: ')
    if (y < 0):
        y = obter_numero_float('Informe um valor positivo! Digite novamente um valor para y: ')
  
    #Processamento
    area_retângulo = calcular_area_retângulo(x, y)

    #Saída
    print(f'\n>> O valor da área do retângulo é de: {area_retângulo}cm.')

def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def calcular_area_retângulo(x, y):
    area = x * y
    return area
    
main()