//32.lista1 - Leia um número inteiro (3 dígitos), calcule e escreva a diferença entre o número e seu inverso.

import {question} from 'readline-sync'

//Entrada
const num = Number(question('Informe um número inteiro de 3 dígitos: '))

//Processamento
const centena = Math.floor(num / 100) 
const resto = num % 100 

const dezena = Math.floor(resto / 10)
const unidade = resto % 10

const uni = unidade.toString()
const dez = dezena.toString()
const cent = centena.toString()

const inverso = uni + dez + cent
const num_inv = Number(inverso)
const sub = Math.abs(num - num_inv)


//Saída
console.log(`\n>>> O número digitado pelo usuário é ${num}, e o seu inverso é ${num_inv}. \nA subtração desses dois números é igual a ${sub}.`)

