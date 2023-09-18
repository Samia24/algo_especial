//2. Leia 2 (dois) números, verifique e escreva o menor e o maior entre os números lidos.

import { question } from "readline-sync"

//Entrada
const numero1 = obter_numero_int('Informe o primeiro número: ')
const numero2 = obter_numero_int('Informe o segundo número: ')

//Processamento
const {num_maior, num_menor} = maior_menor(numero1, numero2)

//Saída
console.log(`\n>>> O maior número é ${num_maior} e o menor é ${num_menor}.`)

function obter_numero_int(descricao){
    let numero = Number(question(descricao))
    return numero
}

function maior_menor(num1, num2){
    let maior = 0
    let menor = 0
    
    if (num1 > num2){
        maior = num1
        menor = num2
    }else if (num1 < num2){
        maior = num2
        menor = num1
    }
    return {num_maior: maior, num_menor: menor}
}   
    
