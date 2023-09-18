//5. Leia 3 (três) números e escreva-os em ordem crescente.

import { question } from "readline-sync"

function main() {

    // Entrada
    const numero1 = obter_numero_int('Informe o primeiro número: ')
    const numero2 = obter_numero_int('Informe o segundo número: ')
    const numero3 = obter_numero_int('Informe o terceiro número: ')

    // Processamento
    const [num_menor, num_interm, num_maior] = ordem_crescente(numero1, numero2, numero3)

    // Saída
    console.log(`\n>>> A ordem crescente é ${num_menor}, ${num_interm} e ${num_maior}.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function ordem_crescente(num1, num2, num3) {
    let menor, intermediario, maior

    if (num1 > num2 && num1 > num3 && num2 > num3) {
        maior = num1
        intermediario = num2
        menor = num3
    } else if (num1 < num2 && num1 < num3 && num2 < num3) {
        maior = num3
        intermediario = num2
        menor = num1
    } else if (num1 < num2 && num1 > num3 && num2 > num3) {
        maior = num2
        intermediario = num1
        menor = num3
    } else if (num1 < num3 && num1 > num2 && num2 < num3) {
        maior = num3
        intermediario = num1
        menor = num2
    } else if (num3 < num2 && num3 > num1 && num2 > num1) {
        maior = num2
        intermediario = num3
        menor = num1
    } else if (num3 < num1 && num3 > num2 && num2 < num1) {
        maior = num1
        intermediario = num3
        menor = num2
    }

    return [menor, intermediario, maior]
}

main()
