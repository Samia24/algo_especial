//6. Leia 3 (três) números (cada número corresponde a um ângulo interno do triângulo), verifique e escreva se os 3 (três) números formam um triângulo (a soma dos ângulos internos é igual a 180º). Se formam, verifique se formam um triângulo acutângulo (3 ângulos < 90º), retângulo (1 ângulo = 90º) ou obtusângulo (1 ângulo > 90º). Não existe ângulo com tamanho 0º (zero grau).

import { question } from "readline-sync"

function main() {
    // Entrada
    const angulo_1 = obter_numero_int('Informe o primeiro ângulo: ')
    const angulo_2 = obter_numero_int('Informe o segundo ângulo: ')
    const angulo_3 = obter_numero_int('Informe o terceiro ângulo: ')

    // Processamento
    if (eh_triangulo(angulo_1, angulo_2, angulo_3)) {
        console.log('\nSIM, é um triângulo!')
        const tipo_triangulo = classif_triangulo(angulo_1, angulo_2, angulo_3)
        console.log(`${tipo_triangulo}`)
    } else {
        console.log('NÃO, os ângulos informados não formam um triângulo!')
    }
}

function obter_numero_int(descricao) {
    const angulo = Number(question(descricao))
    return angulo
}

function eh_triangulo(ang1, ang2, ang3) {
    if (ang1 <= 0 || ang2 <= 0 || ang3 <= 0) {
        return false
    }
    
    const soma = ang1 + ang2 + ang3
    if (soma === 180) {
        return true
    } else {
        return false
    }
}

function classif_triangulo(ang1, ang2, ang3) {
    if (ang1 === 90 || ang2 === 90 || ang3 === 90) {
        return '>>> Triângulo RETÂNGULO <<<'
    } else if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
        return '>>> Triângulo ACUTÂNGULO <<<'
    } else {
        return '>>> Triângulo OBTUSÂNGULO <<<'
    }
}

main()
