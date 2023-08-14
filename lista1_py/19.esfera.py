#19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

#Entrada
raio = float(input('Informe o valor do raio de uma esfera: '))

#Processamento
volume = (4 * 3.14 * (raio ** 3)) / 3

#Saída
print(f'\n>>> O volume da esfera é de {volume:.1f}.')