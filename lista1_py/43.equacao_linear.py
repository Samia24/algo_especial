#43. Um sistema de equações lineares do tipo ax + by = c; dx + ey = f, pode ser resolvido segundo mostrado abaixo: x = ((ce - bf) / (ae - bd)) ; y = ((af - cd) / (ae - bd)). Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

#Entrada
a = int(input('Informe o valor de a: '))
b = int(input('Informe o valor de b: '))
c = int(input('Informe o valor de c: '))
d = int(input('Informe o valor de d: '))
e = int(input('Informe o valor de e: '))
f = int(input('Informe o valor de f: '))

#Processamento
x = (((c*e) - (b*f)) / ((a*e) - (b*d)))
y = (((a*f) - (c*d)) / ((a*e) - (b*d)))

#Saída
print(f'\n>>> O valor de x é {x:.1f} e o valor de y é {y:.1f}.')

