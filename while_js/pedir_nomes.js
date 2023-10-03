import { question } from "readline-sync";

function main(){
    let nome = question('Digite um nome: ')
    let menor_nome = nome

    while(nome.length !== 7){
        nome = question('Digite um nome: ')
        if (nome.length < menor_nome.length){
            menor_nome = nome
        }
    }

    console.log(`Menor nome: ${menor_nome}.`)
}

main()