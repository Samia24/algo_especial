//4. Leia o valor do dólar e um valor em dólar, calcule e escreva o equivalente em real (R$).
import { question } from "readline-sync"

//Entrada 
const valor_dolar = Number(question('Informe o valor do dólar: '))
const valor = Number(question('Informe um valor em dólar: '))

//Processamento
const valor_real = valor * valor_dolar

//Saída
console.log(`\n>>> O equivalente do valor em dólar para reais é de R$${valor_real.toFixed(2)}.`)