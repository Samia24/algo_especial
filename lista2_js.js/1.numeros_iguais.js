//1. Leia 3 (três) números, verifique e escreva quantos números iguais existem entre os números.

import {question} from 'readline-sync'
//Entrada
const numero1 = obter_numero_int('Informe o primeiro número: ')
const numero2 = obter_numero_int('Informe o segundo número: ')
const numero3 = obter_numero_int('Informe o terceiro número: ')

//Processamento
const qtd_iguais = numeros_iguais(numero1, numero2, numero3)

//Saída
console.log(`\n>>> A quantidade de números iguais é ${qtd_iguais}.`)

function obter_numero_int(descricao){
    let numero = Number(question(descricao))
    return numero
}

function numeros_iguais(num1, num2, num3){
    let qtd_num_iguais = 0
    if (num1 === num2 && num1 !== num3 || num2 === num3 && num2 !== num1 || num1 === num3 && num1 !== num2){
        qtd_num_iguais += 2
        return qtd_num_iguais
    }else if(num1 === num2 && num1 === num3){
        qtd_num_iguais += 3
        return qtd_num_iguais
    }else{
        return qtd_num_iguais
    }
}
