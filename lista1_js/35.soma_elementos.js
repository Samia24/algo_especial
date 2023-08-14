//35.lista1 - Leia um número inteiro (4 dígitos), calcule e escreva a soma dos elementos que o compõem. Ex.: número = 9534 ; soma = 9+5+3+4 = 21.

import {question} from 'readline-sync'

//Entrada
const numero = Number(question('Número: ')) 

//Processamento 
const milhar = Math.floor(numero / 1000) 
const resto1 = numero % 1000 

const centena = Math.floor(resto1 / 100) 
const resto2 = resto1 % 100

const dezena = Math.floor(resto2 / 10) 
const unidade = resto2 % 10

const soma = milhar + centena + dezena + unidade

//Saída
console.log(`\n >>> Soma: ${soma}`)