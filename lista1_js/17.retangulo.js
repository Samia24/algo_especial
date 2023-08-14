//17. Leia o valor da base e altura de um retângulo, calcule e escreva sua área. (área = base * altura)

import { question } from "readline-sync"

//Entrada
const base = Number(question('Informe o valor da base de um retângulo: '))
const altura = Number(question('Informe o valor da altura de um retângulo: '))


//Processamento
const area = base * altura

//Saída
console.log(`\n>>> A área do retângulo é de ${area.toFixed(1)}.`)