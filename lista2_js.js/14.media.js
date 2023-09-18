//14. Leia 5 (cinco) números inteiros, calcule a sua média e escreva os que são maiores que a média.

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero1 = obter_numero_int('Informe o primeiro número: ')
    const numero2 = obter_numero_int('Informe o segundo número: ')
    const numero3 = obter_numero_int('Informe o terceiro número: ')
    const numero4 = obter_numero_int('Informe o quarto número: ')
    const numero5 = obter_numero_int('Informe o quinto número: ')

    // Processamento
    const media_numeros = media(numero1, numero2, numero3, numero4, numero5)

    // Saída
    console.log(`\n>> A média dos números é: ${media_numeros}.`)
    console.log('Os números maiores que a média são: ')
    if (numero1 > media_numeros) {
        console.log(numero1)
    }
    if (numero2 > media_numeros) {
        console.log(numero2)
    }
    if (numero3 > media_numeros) {
        console.log(numero3)
    }
    if (numero4 > media_numeros) {
        console.log(numero4)
    }
    if (numero5 > media_numeros) {
        console.log(numero5)
    }
    console.log('<<')
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function media(num1, num2, num3, num4, num5) {
    const qtd_num = 5
    const media_num = (num1 + num2 + num3 + num4 + num5) / qtd_num
    return media_num
}

main()
