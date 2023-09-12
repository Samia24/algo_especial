#7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

def main():
    lado1 = int(input('Informe o primeiro lado: '))
    lado2 = int(input('Informe o segundo lado: '))
    lado3 = int(input('Informe o terceiro lado: '))

    if (eh_triangulo(lado1, lado2, lado3)):
        print('\nSIM, é um triângulo!')
        tipo_triangulo = classif_triangulo(lado1, lado2, lado3)
        print(f'{tipo_triangulo}')
    else:
        print('\nNÃO, os lados informados não formam um triângulo!')


def eh_triangulo(lado1, lado2, lado3):
    soma1 = lado1 + lado2
    soma2 = lado2 + lado3
    soma3 = lado1 + lado3

    if (soma1 < lado3 or soma2 < lado1 or soma3 < lado2 or lado1 == 0 or lado2 == 0 or lado3 == 0):
        return False
    else:
        return True
    
def classif_triangulo(lado1, lado2, lado3):
    
    if (lado1 == lado2 == lado3):
        return '>>> Triângulo EQUILÁTERO <<<'
    elif (lado1 == lado2 != lado3 or lado2 == lado3 != lado1 or lado1 == lado3 != lado2):
        return '>>> Triângulo ISÓSCELES <<<'
    elif (lado1 != lado2 != lado3):
        return '>>> Triângulo ESCALENO <<<'

main()
