//3. Leia um valor em minutos, calcule e escreva o equivalente em horas e minutos.

import { question } from "readline-sync"

//Entrada
const minutos = Number(question('Informe o horário em minutos: '))

//Processamento
const horas = Math.floor(minutos / 60)
const min = minutos % 60

//Saída
console.log(`\n>>> O horário de ${minutos}min equivale a ${horas}h e ${min}min.`)