import { question } from "readline-sync"

export function obter_numero(descricao){
    return Number(question(descricao))
}

export function obter_numero_minimo(descricao, minimo){
    let numero = obter_numero(descricao)

    while (numero < minimo){
        console.log(`ERROR: Digite um número maior ou igual a ${minimo}`)
        numero = obter_numero(descricao)
    }
    return numero
}

export function obter_numero_positivo(descricao){
    return obter_numero_minimo(descricao, 1)
}