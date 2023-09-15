#19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea (IMC = peso / altura2 ). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). 

def main():
    #Entrada
    altura = obter_numero_float('Informe a altura em metros: ')
    peso = obter_numero_float('Informe o peso em quilogramas: ')
    
    #Processamento
    imc = calcular_imc(altura, peso)
    classificacao = classif_imc(imc)

    #Saída
    print(f'\n>>> Seu IMC é: {imc:.2f}. \nVocê está com {classificacao}.<<<')

def obter_numero_float(descricao):
    numero = float(input(descricao))
    return numero

def calcular_imc(altura, peso):
    imc = peso / (altura**2)
    return imc

def classif_imc(imc):
    if (imc < 25):
        return 'PESO NORMAL'
    elif (25 <= imc <= 30):
        return 'OBESIDADE'
    else:
        return 'OBESIDADE MÓRBIDA'

main()
