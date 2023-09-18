//11. Leia quatro números (opção, num 1, num2, num3) e que escreva o valor de num1 se opção igual a 1; o valor de num2 se opção for igual a 2; e o valor de num3 se opção for igual a 3. Os únicos valores possíveis para a variável opção são 1, 2 e 3. 

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero1 = obter_numero_int('Informe o primeiro número: ')
    const numero2 = obter_numero_int('Informe o segundo número: ')
    const numero3 = obter_numero_int('Informe o terceiro número: ')
    console.log('\n>>>>> MENU <<<<<')
    console.log('(1) Mostrar o primeiro número digitado')
    console.log('(2) Mostrar o segundo número digitado')
    console.log('(3) Mostrar o terceiro número digitado')
    const opcao = obter_numero_int('\nEscolha uma opção do menu: ')

    // Processamento
    const menu = menu_numeros(opcao, numero1, numero2, numero3)

    // Saída
    if (opcao < 1 || opcao > 3) {
        console.log('\nOPÇÃO INVÁLIDA!')
    } else {
        console.log(`\n>> A opção escolhida retorna o número: ${menu}`)
    }
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function menu_numeros(opcao, num1, num2, num3) {
    if (opcao === 1) {
        return num1
    } else if (opcao === 2) {
        return num2
    } else if (opcao === 3) {
        return num3
    }
}

main()

