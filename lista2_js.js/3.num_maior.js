//3. Leia 3 (três) números, verifique e escreva o maior entre os números lidos.

import { question } from "readline-sync";

function main() {
    // Entrada
    const numero1 = obter_numero_int('Informe o primeiro número: ')
    const numero2 = obter_numero_int('Informe o segundo número: ')
    const numero3 = obter_numero_int('Informe o terceiro número: ')

    // Processamento
    const num_maior = maior(numero1, numero2, numero3)

    // Saída
    console.log(`\n>>> O maior número é ${num_maior}.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function maior(num1, num2, num3) {
    let maior = 0

    if (num1 > num2 && num1 > num3) {
        maior = num1
    } else if (num2 > num1 && num2 > num3) {
        maior = num2
    } else {
        maior = num3
    }

    return maior
}

main()
