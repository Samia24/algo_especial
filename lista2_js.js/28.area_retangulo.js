//28. Leia as coordenadas cartesianas (x e y) de 2 (dois) pontos no plano, que corresponderão a dois cantos de um retângulo. Baseado nisto, calcule e escreva a área deste retângulo. Lembre-se de que o valor da área não pode ser negativo.

import { question } from "readline-sync"

function main() {
    // Entrada
    let x = obter_numero_float('Informe o valor de x: ')
    if (x < 0) {
        x = obter_numero_float('Informe um valor positivo! Digite novamente um valor para x: ')
    }
    let y = obter_numero_float('Informe o valor de y: ')
    if (y < 0) {
        y = obter_numero_float('Informe um valor positivo! Digite novamente um valor para y: ')
    }

    // Processamento
    const area_retangulo = calcular_area_retangulo(x, y)

    // Saída
    console.log(`\n>> O valor da area do retangulo e de: ${area_retangulo}cm.`)
}

function obter_numero_float(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function calcular_area_retangulo(x, y) {
    const area = x * y
    return area
}

main()
