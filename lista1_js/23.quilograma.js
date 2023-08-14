//23. Leia um valor em kg (quilograma), calcule e escreva o equivalente em g (grama).

import { question } from "readline-sync"

//Entrada
const kg = Number(question('Informe um valor em quilogramas: '))


//Processamento
const gramas = kg * 1000

//Saída
console.log(`\n>>> O valor equivalente em gramas é de ${gramas.toFixed(1)}g.`)