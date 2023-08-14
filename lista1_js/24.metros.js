//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from "readline-sync"

//Entrada
const metros = Number(question('Informe um valor em metros: '))


//Processamento
const cm = metros * 100

//Saída
console.log(`\n>>> O valor equivalente em centímetros é de ${cm.toFixed(1)}cm.`)