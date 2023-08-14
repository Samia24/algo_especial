//39.lista1 - Questão 39 -Leia três números inteiros e positivos (A, B, C) e calcule a seguinte expressão: D = R + S / 2, onde R = (A + B)**2 e S = (B + C)**2.

import {question} from 'readline-sync'

//Entrada
const num1 = Number(question('Informe o primeiro número: '))
const num2 = Number(question('Informe o segundo número: '))
const num3 = Number(question('Informe o terceiro número: '))

// Processamento
const r = (num1 + num2)**2

const s = (num2 + num3)**2

const d = (r + s) / 2

// Saída
console.log(`\n>>> O resultado da expressão D = R + S / 2 é : ${d.toFixed(1)}.`)
