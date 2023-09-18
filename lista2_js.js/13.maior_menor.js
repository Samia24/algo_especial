//13. Leia 5 (cinco) números inteiros e escreva o maior e o menor deles. Considere que todos os valores são diferentes.

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero1 = obter_numero_int('Informe o primeiro número: ')
    const numero2 = obter_numero_int('Informe o segundo número: ')
    const numero3 = obter_numero_int('Informe o terceiro número: ')
    const numero4 = obter_numero_int('Informe o quarto número: ')
    const numero5 = obter_numero_int('Informe o quinto número: ')

    // Processamento
    const num_maior_menor = maior_menor(numero1, numero2, numero3, numero4, numero5)

    // Saída
    console.log(num_maior_menor)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function maior_menor(num1, num2, num3, num4, num5) {
    let maior = num1
    let menor = num1
    if (num1 !== num2 && num1 !== num3 && num1 !== num4 && num1 !== num5 && num2 !== num3 && num2 !== num4 && num2 !== num5 && num3 !== num4 && num3 !== num5 && num4 !== num5) {
        if (num2 > maior) {
            maior = num2
        }
        if (num3 > maior) {
            maior = num3
        }
        if (num4 > maior) {
            maior = num4
        }
        if (num5 > maior) {
            maior = num5
        }
        if (num2 < menor) {
            menor = num2
        }
        if (num3 < menor) {
            menor = num3
        }
        if (num4 < menor) {
            menor = num4
        }
        if (num5 < menor) {
            menor = num5
        }
        
        return `\n>>> O maior número é ${maior} e o menor é ${menor}.`
    } else {
        return '\nInforme números diferentes!'
    }
}

main()
