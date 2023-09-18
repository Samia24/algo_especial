//12. Leia 1 (um) número inteiro e escreva se este número é par ou impar.

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero = obter_numero_int('Informe um número inteiro: ')

    // Processamento
    const numero_par_impar = par_impar(numero)

    // Saída
    console.log(`\n>> O número ${numero} é ${numero_par_impar}.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function par_impar(num) {
    if (num % 2 === 0) {
        return 'PAR'
    } else {
        return 'ÍMPAR'
    }
}

main()
