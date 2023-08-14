//22. Leia um valor em km, calcule e escreva o equivalente em m.

import { question } from "readline-sync"

//Entrada
const km = Number(question('Informe um valor em quilômetros: '))


//Processamento
const metros = km * 1000

//Saída
console.log(`\n>>> O valor equivalente em metros é de ${metros.toFixed(1)}m.`)