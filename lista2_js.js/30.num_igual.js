//30. Existem números de 4 dígitos (entre 1000 e 9999) que obedecem à seguinte característica: se dividirmos o número em dois números de dois dígitos, um composto pela dezena e pela unidade, e outro pelo milhar e pela centena, se somarmos estes dois novos números gerando um terceiro, o quadrado deste terceiro número é exatamente o número original de quatro dígitos. Por exemplo: 2025 -> dividindo: 20 e 25 -> somando temos 45 -> 452 = 2025. 

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero = obter_numero_int('Informe um número de 4 dígitos: ')

    // Processamento
    const eh_mesmo_numero = num_original(numero)

    // Saída
    console.log(`\n>>> O número ${numero} quando separado em: \nMilhar e centena, dezena e unidade, ao somar-se e elevar essa soma ao quadrado,\n O resultado é >> ${eh_mesmo_numero}`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function num_original(num) {
    const num_ini = Math.floor(num / 100)
    const num_fin = num % 100
    const soma = num_ini + num_fin
    const quadrado = soma ** 2

    if (num === quadrado) {
        return `${quadrado}, que É o mesmo VALOR INICIAL`
    } else {
        return `${quadrado}, que NÃO é o mesmo VALOR INICIAL`
    }
}

main()
