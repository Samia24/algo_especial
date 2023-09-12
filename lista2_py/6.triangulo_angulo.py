#Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau). 

def main():
    angulo_1 = int(input('Informe o primeiro ângulo: '))
    angulo_2 = int(input('Informe o segundo ângulo: '))
    angulo_3 = int(input('Informe o terceiro ângulo: '))

    if (eh_triangulo(angulo_1, angulo_2, angulo_3)):
        print('SIM, é um triângulo!')
        tipo_triangulo = classif_triangulo(angulo_1, angulo_2, angulo_3)
        print(f'{tipo_triangulo}')
    else:
        print('NÃO, os ângulos informados não formam um triângulo!')


def eh_triangulo(ang1, ang2, ang3):
    if (ang1 <= 0 or ang2 <= 0 or ang3 <= 0):
        return False
    
    soma = ang1 + ang2 + ang3
    if soma == 180:
        return True
    else:
        return False
    
def classif_triangulo(ang1, ang2, ang3):
    
    if (ang1 == 90 or ang2 == 90 or ang3 == 90):
        return '>>> Triângulo RETÂNGULO <<<'
    elif (ang1 < 90 and ang2 < 90 and ang3 < 90):
        return '>>> Triângulo ACUTÂNGULO <<<'
    else:
        return '>>> Triângulo OBTUSÂNGULO <<<'

main()
