//13. Leia um valor em real (R$), calcule e escreva 70% deste valor.
import { question } from "readline-sync"

//Entrada
const valor = Number(question('Informe um valor em reais: R$'))

//Processamento
const novo_valor = valor * (70/100)

//Saída
console.log(`\n>>> 70% de R$${valor.toFixed(2)} é R$${novo_valor.toFixed(2)}.`)