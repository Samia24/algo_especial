//29. Leia um número inteiro de meses, calcule e escreva quantos anos e quantos meses ele corresponde.

import { question } from "readline-sync"

//Entrada
const meses = Number(question('Informe a quantidade de meses: '))


//Processamento
const anos = Math.floor(meses / 12)
const mes = meses % 12

//Saída
console.log(`\n>>> O equivalente a essa quantidade de meses é de ${anos.toFixed(0)} ano(s) e ${mes.toFixed(0)} mes(es).`) 