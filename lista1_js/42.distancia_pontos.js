//42.Escreva um algoritmo que, tendo como dados de entrada 2 pontos quaisquer no plano, ponto1 (x1,y1) e ponto2 (x2,y2), escreva a distância entre eles, conforme fórmula abaixo.(d = raiz(x2 - x1)2 + (y2 - y1)2)


import {question} from 'readline-sync'

//Entrada
const ponto1_x1 = Number(question('Informe o valor da coordenada x1: '))
const ponto1_y1 = Number(question('Informe o valor da coordenada y1: '))

const ponto2_x2 = Number(question('\nInforme o valor da coordenada x2: '))
const ponto2_y2 = Number(question('Informe o valor da coordenada y2: '))

// Processamento
const dist = ((ponto2_x2 - ponto1_x1)**2) + ((ponto2_y2 - ponto1_y1)**2)
const d = Math.sqrt(dist, 1/2)

//Saída
console.log(`\n>>> A distância entre os pontos um e dois é ${d.toFixed(1)}.`)