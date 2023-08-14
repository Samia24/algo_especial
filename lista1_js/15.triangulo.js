//15. Leia o valor da base e altura de um triângulo, calcule e escreva sua área. (área=(base * altura)/2)

import { question } from "readline-sync"

//Entrada
const base = Number(question('Informe o valor da base de um triângulo: '))
const altura = Number(question('Informe o valor da altura de um triângulo: '))


//Processamento
const area = (base * altura) / 2

//Saída
console.log(`\n>>> A área do triângulo é de ${area.toFixed(1)}.`)