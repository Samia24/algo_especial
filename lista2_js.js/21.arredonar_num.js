//21. Realize arredondamentos de números utilizando a regra usual da matemática: se a parte fracionaria for maior do que ou igual a 0,5, o numero é arredondado para o inteiro imediatamente superior, caso contrario, é arredondado para o inteiro imediatamente inferior. 

import { question } from "readline-sync"

function main() {
    // Entrada
    const numero = obter_numero_float('Informe um número: ')

    // Processamento
    const arredondamento = arredondar_numero(numero)

    // Saída
    console.log(`\n>>> O número ${numero} arredondado é ${arredondamento}. <<<`)
}

function obter_numero_float(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function arredondar_numero(num) {
    const num_int = Math.trunc(num)
    const num_frac = num - num_int

    if (num_frac < 0.5) {
        return num_int
    } else {
        const arredondado = num_int + 1
        return arredondado
    }
}

main()
