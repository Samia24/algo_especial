//10. Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1o pelo 2o.
import { question } from "readline-sync"

//Entrada
const num1 = Number(question('Digite o 1º número: '))
const num2 = Number(question('Digite o 2º número: '))

//Processamento 
const quociente = Math.floor (num1 / num2)
const resto = num1 % num2

//Saída
console.log(`\n>>> O quociente da divisão de ${num1} por ${num2} é ${quociente} e o resto é ${resto}.`)