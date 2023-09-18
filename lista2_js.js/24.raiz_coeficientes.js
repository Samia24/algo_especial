//24. Leia os coeficientes (A, B e C) de uma equações de 2° grau e escreva suas raízes. Vale lembrar que o coeficiente A deve ser diferente de 0 (zero).

import { question } from "readline-sync"

function main() {
    // Entrada
    const coeficiente_A = obter_numero_int('Informe o valor do coeficiente A: ')

    if (coeficiente_A == 0) {
        obter_numero_int('Informe um valor diferente de zero para o coeficiente A: ')
    }

    const coeficiente_B = obter_numero_int('Informe o valor do coeficiente B: ')
    const coeficiente_C = obter_numero_int('Informe o valor do coeficiente C: ')

    // Processamento
    const [raiz_A, raiz_B, raiz_C] = calcular_raiz(coeficiente_A, coeficiente_B, coeficiente_C)

    // Saída
    console.log(`\n>>> A raiz de A é: ${raiz_A.toFixed(1)};\nA raiz de B é: ${raiz_B.toFixed(1)};\nA raiz de C é: ${raiz_C}`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function calcular_raiz(coef_A, coef_B, coef_C) {
    const raiz_A = Math.sqrt(coef_A)
    const raiz_B = Math.sqrt(coef_B)
    const raiz_C = Math.sqrt(coef_C)
    return [raiz_A, raiz_B, raiz_C]
}

main()
