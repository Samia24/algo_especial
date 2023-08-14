#42. Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.(d = raiz(x2 - x1)2 + (y2 - y1)2)

import math

#Entrada
ponto1_x1 = int(input('Informe o valor da coordenada x1: '))
ponto1_y1 = int(input('Informe o valor da coordenada y1: '))

ponto2_x2 = int(input('\nInforme o valor da coordenada x2: '))
ponto2_y2 = int(input('Informe o valor da coordenada y2: '))

#Processamento
dist = ((ponto2_x2 - ponto1_x1)**2) + ((ponto2_y2 - ponto1_y1)**2)
d = math.sqrt(dist)

#Saída
print(f'\n>>> A distância entre os pontos um e dois é {d:.1f}.')