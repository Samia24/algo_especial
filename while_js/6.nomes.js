//6. Receba diversos nomes do usuário. Pare quando ele digitar um nome com 7 caracteres.

import { question } from "readline-sync";

function main(){
    let nomes = question('Digite um nome: ')
    
    while(nomes.length !== 7){
        nomes = question('Informe outro nome !!! \nDigite um nome: ')    
    }
    console.log(`\n>>> O nome ${nomes} possui 7 caracteres.`)

}

main()