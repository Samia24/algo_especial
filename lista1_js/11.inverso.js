//11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)
import { question } from "readline-sync"

//Entrada
const numero = Number(question('Informe um número inteiro de 3 dígitos: '))

//Processamento
const centena = Math.floor(numero / 100)
const resto = numero % 100
const dezena = Math.floor(resto / 10)
const unidade = resto % 10

//Saída
console.log(`'\n >>> O inverso de ${centena}${dezena}${unidade} é ${unidade}${dezena}${centena}.`)