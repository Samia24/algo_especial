//31.lista1 - Leia um número inteiro (4 dígitos binários), calcule e escreva o equivalente na base decimal.

import {question} from 'readline-sync'

//Entrada
const num = Number(question('Informe um número inteiro de 4 dígitos: '))

//Processamento
const milhar = Math.floor(num / 1000) 
const resto = num % 1000 

const centena = Math.floor(resto / 100)
const res = resto % 100

const dezena = Math.floor(res / 10)
const unidade = res % 10

// Convertendo para base decimal
const decimal = (unidade * (2 ** 0)) + (dezena * (2 ** 1)) + (centena * (2 ** 2)) + (milhar * (2 ** 3))

//Saída
console.log('\nMilhar:', milhar)
console.log('Centena:', centena)
console.log('Dezena:', dezena)
console.log('Unidade:', unidade)
console.log(`\n>>> O número binário digitado pelo usuário ${milhar}${centena}${dezena}${unidade}, convertido para base decimal equivale a ${decimal}.`)
