//18. Leia dois valores e uma das seguintes operações a serem executadas (codificadas da seguinte forma: 1 – Adição, 2 – Subtração, 3 – Multiplicação e 4 – Divisão). Calcule e escreva o resultado dessa operação sobre os dois valores lidos. 

import { question } from "readline-sync"

function main() {
    // Entrada
    const valor1 = obter_numero_int('Digite o valor 1: ')
    const valor2 = obter_numero_int('Digite o valor 2: ')
    const opcoes = obter_numero_int('Escolha uma opção (1 - Adição; 2 - Subtração; 3 - Multiplicação; 4 - Divisão): ')

    // Processamento
    const result = resultado(valor1, valor2, opcoes)

    // Saída
    console.log(result)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function resultado(valor1, valor2, opcoes) {
    if (opcoes === 1) {
        const adicao = valor1 + valor2
        return `\n>>> Você escolheu a opção adição. \nO resultado de ${valor1} + ${valor2} é ${adicao}.`
    } else if (opcoes === 2) {
        const subtracao = valor1 - valor2
        return `\n>>> Você escolheu a opção subtração. \nO resultado de ${valor1} - ${valor2} é ${subtracao}.`
    } else if (opcoes === 3) {
        const multiplicacao = valor1 * valor2
        return `\n>>> Você escolheu a opção multiplicação. \nO resultado de ${valor1} x ${valor2} é ${multiplicacao}.`
    } else if (opcoes === 4) {
        const divisao = valor1 / valor2
        return `\n>>> Você escolheu a opção divisão. \nO resultado de ${valor1} / ${valor2} é ${divisao.toFixed(1)}.`
    } else {
        return '\n>>> Opção inválida!'
    }
}

main()
