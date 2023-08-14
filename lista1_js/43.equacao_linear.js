//43. Um sistema de equações lineares do tipo ax + by = c; dx + ey = f, pode ser resolvido segundo mostrado abaixo: x = ((ce - bf) / (ae - bd)) ; y = ((af - cd) / (ae - bd)). Escreva um algoritmo que leia os coeficientes a, b, c, d, e e f, calcule e escreva os valores de x e y.

import {question} from 'readline-sync'

//Entrada
const a = Number(question('Informe o valor de a: '))
const b = Number(question('Informe o valor de b: '))
const c = Number(question('Informe o valor de c: '))
const d = Number(question('Informe o valor de d: '))
const e = Number(question('Informe o valor de e: '))
const f = Number(question('Informe o valor de f: '))

// Processamento
const x = (((c*e) - (b*f)) / ((a*e) - (b*d)))
const y = (((a*f) - (c*d)) / ((a*e) - (b*d)))

//Saída
console.log(`\n>>> O valor de x é ${x.toFixed(1)} e o valor de y é ${y.toFixed(1)}.`)

