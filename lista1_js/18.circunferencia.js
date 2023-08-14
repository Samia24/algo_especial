//18. Leia o valor do raio de uma circunferência, calcule e escreva seu comprimento.( =c 2 * p * r)

import { question } from "readline-sync"

//Entrada
const raio = Number(question('Informe o valor do raio de uma circunferência: '))


//Processamento
const comprimento = 2 * 3.14 * raio

//Saída
console.log(`\n>>> O comprimento da circunferência é de ${comprimento.toFixed(1)}cm.`)