import { question } from "readline-sync";

function main(){
    let numero = obter_numero('Digite um número: ')
    let somatorio = numero

    while(numero % 7 !== 0){
        numero = obter_numero('Digite um número: ')
        somatorio += numero
    }
    console.log(`Somatório dos números: ${somatorio}.`)
}

function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

main()