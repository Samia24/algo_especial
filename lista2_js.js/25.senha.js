//25. Verifique a validade de uma senha fornecida pelo usuário. A senha é 1234. O algoritmo deve escrever uma mensagem de permissão de acesso ou não.

import { question } from "readline-sync"

function main() {
    // Entrada
    const senha = obter_numero_int('Informe uma senha de 4 dígitos: ')

    // Processamento
    const validacao_senha = validar_senha(senha)

    // Saída
    console.log(`\n>>> A senha informada foi ${senha}.\n\n>>>>> ${validacao_senha} <<<<<\n`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function validar_senha(senha) {
    const primeiro_digito = Math.floor(senha / 1000)
    const resto = senha % 1000
    const segundo_digito = Math.floor(resto / 100)
    const resto2 = resto % 100
    const terceiro_digito = Math.floor(resto2 / 10)
    const quarto_digito = resto2 % 10

    if (primeiro_digito === 1 && segundo_digito === 2 && terceiro_digito === 3 && quarto_digito === 4) {
        return 'ACESSO PERMITIDO'
    } else {
        return 'ACESSO NEGADO'
    }
}

main();
