//27. Leia um número inteiro de segundos, calcule e escreva quantas horas, quantos minutos e quantos segundos ele corresponde.

import { question } from "readline-sync"

//Entrada
const segundos = Number(question('Informe a quantidade de segundos: '))


//Processamento
const horas = Math.floor(segundos / 3600)
const resto = segundos % 3600
const minutos = Math.floor(resto / 60)
const seg = resto % 60

//Saída
console.log(`\n>>> O equivalente a essa quantidade de segundos é de ${horas.toFixed(0)}h ${minutos.toFixed(0)} min ${seg}s.`) 