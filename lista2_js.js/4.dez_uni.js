//4. Leia 1 (um) número de 2 (dois) dígitos, verifique e escreva se o algarismo da dezena é igual ou diferente do algarismo da unidade.

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero = obter_numero_int('Informe um número com dois dígitos: ')

    // Processamento
    const resultado = dez_uni(numero)

    // Saída
    console.log(`\n>>> O algarismo da dezena é ${resultado} ao da unidade.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function dez_uni(num) {
    const dezena = Math.floor(num / 10)
    const unidade = num % 10

    if (dezena === unidade) {
        return 'igual'
    } else {
        return 'diferente'
    }
}

main()
