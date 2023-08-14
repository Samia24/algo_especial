//16. Leia o valor do lado de um quadrado, calcule e escreva sua área. (área = lado2)

import { question } from "readline-sync"

//Entrada
const lado = Number(question('Informe o valor do lado de um quadrado: '))


//Processamento
const area = lado ** 2

//Saída
console.log(`\n>>> A área do quadrado é de ${area.toFixed(1)}cm.`)