//26. Leia um número inteiro de dias, calcule e escreva quantas semanas e quantos dias ele corresponde.

import { question } from "readline-sync"

//Entrada
const dias = Number(question('Informe a quantidade de dias: '))


//Processamento
const semanas = Math.floor(dias / 7)
const d = dias % 7

//Saída
console.log(`\n>>> O equivalente a essa quantidade de dias é de ${semanas.toFixed(0)} semana(s) e ${d.toFixed(0)} dia(s).`)