//28. Leia um número inteiro de horas, calcule e escreva quantas semanas, quantos dias e quantas horas ele corresponde.

import { question } from "readline-sync"

//Entrada
const horas = Number(question('Informe a quantidade de horas: '))


//Processamento
const semanas = Math.floor(horas / 168)
const resto = horas % 168
const dias = Math.floor(resto / 24)
const h = resto % 24

//Saída
console.log(`\n>>> O equivalente a essa quantidade de horas é de ${semanas.toFixed(0)} semana(s), ${dias.toFixed(0)} dia(s) e ${h}h.`) 