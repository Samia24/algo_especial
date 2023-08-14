//14. Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import { question } from "readline-sync"

//Entrada
const nota1 = Number(question('Informe a 1ª nota: '))
const peso1 = Number(question('Informe o peso da nota 1: '))
const nota2 = Number(question('Informe a 2ª nota: '))
const peso2 = Number(question('Informe o peso da nota 2: '))
const nota3 = Number(question('Informe a 3ª nota: '))
const peso3 = Number(question('Informe o peso da nota 3: '))

//Processamento
const media_ponderada = ((nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)) / (peso1 + peso2 + peso3)

//Saída
console.log(`\n>>> A média ponderada das 3 notas é ${media_ponderada.toFixed(1)}.`)