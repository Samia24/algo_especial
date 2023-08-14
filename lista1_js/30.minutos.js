//30. Leia um número inteiro de minutos, calcule e escreva quantos dias, quantas horas e quantos minutos ele corresponde.

import { question } from "readline-sync"

//Entrada
const minutos = Number(question('Informe a quantidade de minutos: '))


//Processamento
const dias = Math.floor(minutos / 1440)
const resto = minutos % 1440
const horas = Math.floor(resto / 60)
const min = resto % 60

//Saída
console.log(`\n>>> O equivalente a essa quantidade de minutos é de ${dias.toFixed(0)} dia(s), ${horas.toFixed(0)}h e ${min}min.`) 