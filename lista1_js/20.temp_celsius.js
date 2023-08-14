//20. Leia uma temperatura em °C, calcule e escreva a equivalente em °F. (t°F = (9 * t°C + 160) / 5)

import { question } from "readline-sync"

//Entrada
const temp_C = Number(question('Informe a temperatura em graus celsius: '))


//Processamento
const temp_F = (9 * temp_C + 160) / 5

//Saída
console.log(`\n>>> A temperatura em Fahrenheit é de ${temp_F.toFixed(1)}ºF.`)