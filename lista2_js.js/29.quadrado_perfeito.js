//29. Um número é um quadrado perfeito quando a raiz quadrada do número é igual à soma das dezenas formadas pelos seus dois primeiros e dois últimos dígitos. Exemplo: √9801 = 99 = 98 + 01. O número 9801 é um quadrado perfeito. Escreva um algoritmo que leia um número de 4 dígitos e verifique se ele é um quadrado perfeito.

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero = obter_numero_int('Informe um número de 4 dígitos: ')

    // Processamento
    const quadrado_perfeito = eh_quadrado_perfeito(numero)

    // Saída
    console.log(`\n>>> O número ${numero} ${quadrado_perfeito}.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function eh_quadrado_perfeito(num) {
    const primeira_dezena = Math.floor(num / 100)
    const segunda_dezena = num % 100

    const raiz_num = Math.sqrt(num)
    const soma_dezenas = primeira_dezena + segunda_dezena

    if (raiz_num === soma_dezenas) {
        return 'é um QUADRADO PERFEITO'
    } else {
        return 'NÃO é um QUADRADO PERFEITO'
    }
}

main()
