//7. Leia 3 números, calcule e escreva a soma dos 2 primeiros e a diferença entre os 2 últimos.
import { question } from "readline-sync"

//Entrada
const num1 = Number(question('Digite o 1º número: '))
const num2 = Number(question('Digite o 2º número: '))
const num3 = Number(question('Digite o 3º número: '))

//Processamento
const soma = num1 + num2
const diferenca = num2 - num3

//Saída
console.log(`\n>>> A soma de ${num1} + ${num2} é ${soma}.`)
console.log(`>>> A soma de ${num2} - ${num3} é ${diferenca}.`)
