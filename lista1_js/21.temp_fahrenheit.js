//21. Leia uma temperatura em °F, calcule e escreva a equivalente em °C. (t°C = (5 * t°F - 160) / 9).

import { question } from "readline-sync"

//Entrada
const temp_F = Number(question('Informe a temperatura em graus Fahrenheit: '))


//Processamento
const temp_C = (5 * temp_F - 160) / 9

//Saída
console.log(`\n>>> A temperatura em graus Celsius é de ${temp_C.toFixed(1)}ºC.`)