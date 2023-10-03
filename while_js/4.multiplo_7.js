//4. Peça diversos números ao usuário até que ele digite um número múltiplo de 7

import { question } from "readline-sync";

function main(){
    let numero = 0  
    let multiplo = true
    
    while(multiplo){
        numero = obter_numero('Digite um número: ')
        if (numero % 7 === 0) {
            console.log(`${numero} é um múltiplo de 7.`)
            multiplo = false
        } else {
            console.log(`${numero} não é um múltiplo de 7. Tente novamente.`)
          }
        }

}


function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

main()