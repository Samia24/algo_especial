//25. Leia um número inteiro de metros, calcule e escreva quantos Km e quantos metros ele corresponde.

import { question } from "readline-sync"

//Entrada
const metros = Number(question('Informe um valor em metros: '))


//Processamento
const km = Math.floor(metros / 1000)
const m = metros % 1000

//Saída
console.log(`\n>>> O valor equivalente é de ${km.toFixed(0)}km e ${m.toFixed(1)}m.`)