//7. Leia 3 (três) números (cada número corresponde a um lado do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma de dois lados não pode ser menor que o terceiro lado). Se formam, verifique se formam um triângulo equilátero (3 lados iguais), isósceles (2 lados iguais) ou escaleno (3 lados diferentes). Não existe lado com tamanho 0 (zero).

import { question } from "readline-sync"

function main() {
    // Entrada
    const lado1 = obter_numero_int('Informe o primeiro lado: ')
    const lado2 = obter_numero_int('Informe o segundo lado: ')
    const lado3 = obter_numero_int('Informe o terceiro lado: ')

    if (eh_triangulo(lado1, lado2, lado3)) {
        console.log('\nSIM, é um triângulo!')
        const tipo_triangulo = classif_triangulo(lado1, lado2, lado3)
        console.log(`${tipo_triangulo}`)
    } else {
        console.log('\nNÃO, os lados informados não formam um triângulo!')
    }
}

function obter_numero_int(descricao) {
    const lado = Number(question(descricao))
    return lado
}

function eh_triangulo(lado1, lado2, lado3) {
    const soma1 = lado1 + lado2
    const soma2 = lado2 + lado3
    const soma3 = lado1 + lado3

    if (soma1 < lado3 || soma2 < lado1 || soma3 < lado2 || lado1 === 0 || lado2 === 0 || lado3 === 0) {
        return false
    } else {
        return true
    }
}

function classif_triangulo(lado1, lado2, lado3) {
    if (lado1 === lado2 && lado2 === lado3) {
        return '>>> Triângulo EQUILÁTERO <<<'
    } else if (lado1 === lado2 && lado2 !== lado3 || lado2 === lado3 && lado3 !== lado1 || lado1 === lado3 && lado3 !== lado2) {
        return '>>> Triângulo ISÓSCELES <<<'
    } else {
        return '>>> Triângulo ESCALENO <<<'
    }
}

main()
