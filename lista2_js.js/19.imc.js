//19. Leia a altura (em metros) e peso (em Kg) de uma pessoa, em seguida calcule o índice de massa corpórea (IMC = peso / altura2 ). Ao final, escreva se a pessoa está com peso normal (IMC abaixo de 25), obeso (IMC entre 25 e 30) ou obesidade mórbida (IMC acima de 30). 

import { question } from "readline-sync"

function main() {
    // Entrada
    const altura = obter_numero_float('Informe a altura em metros: ')
    const peso = obter_numero_float('Informe o peso em quilogramas: ')

    // Processamento
    const imc = calcular_imc(altura, peso)
    const classificacao = classif_imc(imc)

    // Saída
    console.log(`\n>>> Seu IMC é: ${imc.toFixed(2)}. \nVocê está com ${classificacao}.<<<`)
}

function obter_numero_float(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function calcular_imc(altura, peso) {
    const imc = peso / (altura ** 2)
    return imc
}

function classif_imc(imc) {
    if (imc < 25) {
        return 'PESO NORMAL'
    } else if (imc >= 25 && imc <= 30) {
        return 'OBESIDADE'
    } else {
        return 'OBESIDADE MÓRBIDA'
    }
}

main()
