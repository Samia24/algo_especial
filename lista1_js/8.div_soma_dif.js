//8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.
import { question } from "readline-sync"

//Entrada
const num1 = Number(question('Digite o 1º número: '))
const num2 = Number(question('Digite o 2º número: '))

//Processamento
const soma = num1 + num2
const diferenca = num1 - num2
const divisao = soma / diferenca

//Saída
console.log(`\n>>> A divisão da soma: ${soma} pela subtração: ${diferenca} é ${divisao.toFixed(1)}.`)