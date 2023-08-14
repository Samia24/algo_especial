//12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.
import { question } from "readline-sync"

//Entrada
const salario = Number(question('Informe seu salário: R$'))

//Processamento
const novo_salario = salario + (salario * (25/100))

//Saída
console.log(`\n>>> Seu novo salário com aumento de 25% é de R$${novo_salario.toFixed(2)}.`)