import { question } from "readline-sync";

function main(){
    let numero = 0  
    let multiplo = true
    let contador = 0
    
    while(multiplo){
        numero = obter_numero('Digite um número: ')
        if (numero % 7 === 0) {
            console.log(`\n>>> ${numero} é um múltiplo de 7.`)
            contador += 1
            multiplo = false
        } else {
            console.log(`${numero} não é um múltiplo de 7. Tente novamente.`)
            contador += 1
          }
        }
    console.log(`Foram digitados ${contador} números.`)

}


function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

main()