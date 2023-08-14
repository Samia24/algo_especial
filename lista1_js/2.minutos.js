//2. Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.
import { question } from "readline-sync";

//Entrada
const horas = Number(question('Informe as horas: '))
const minutos = Number(question('Informe os minutos: '))

//Processamento
const conv_horas = horas * 60
const total_minutos = conv_horas + minutos

//Saída
console.log(`\n>>> ${horas}h e ${minutos}min equivalem a ${total_minutos}min.`)
