//9. Leia 2 números (A, B) e escreva-os em ordem inversa (B, A).
import { question } from "readline-sync"

//Entrada
const num1 = Number(question('Digite o 1º número: '))
const num2 = Number(question('Digite o 2º número: '))

//Saída
console.log(`\n>>> A ordem inversa de ${num1}, ${num2} é ${num2}, ${num1}.`)