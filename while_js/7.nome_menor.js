//6. Faça o mesmo do anterior, e identifique qual foi o nome com menos caracteres.

import { question } from "readline-sync";

function main(){
    let nomes = question('Digite um nome: ')
    let menor_nome = nomes
    
    while(nomes.length !== 7){
        nomes = question('Informe outro nome !!! \nDigite um nome: ')
        if (nomes.length < menor_nome.length){
            menor_nome = nomes
        }
    }
    console.log(`\n>>> O nome ${nomes} possui 7 caracteres.`)
    console.log(`O menor nome digitado foi ${menor_nome}.`)
    
}

main()