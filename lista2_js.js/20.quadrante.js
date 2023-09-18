//20. Leia a medida de um ângulo (entre 0 e 360°) e escreva o quadrante (primeiro, segundo, terceiro ou quarto) em que o ângulo se localiza.

import { question } from "readline-sync"

function main() {
    // Entrada
    const angulo = obter_numero_float('Informe um ângulo entre 0º e 360º: ')

    // Processamento
    const classificacao = classif_quadrante(angulo)

    // Saída
    console.log(`\n>>> O ângulo de ${angulo.toFixed(0)}º está localizado no ${classificacao} quadrante. <<<`)
}

function obter_numero_float(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function classif_quadrante(angulo) {
    if (angulo <= 90) {
        return 'PRIMEIRO'
    } else if (angulo <= 180) {
        return 'SEGUNDO'
    } else if (angulo <= 270) {
        return 'TERCEIRO'
    } else if (angulo <= 360) {
        return 'QUARTO'
    } else {
        return 'Ângulo fora do intervalo válido.'
    }
}

main()
