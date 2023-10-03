import { question } from "readline-sync";

function main(){
    const limite_inferior = obter_numero('Informe um limite inferior de uma faixa numérica: ')
    const limite_superior = obter_numero_minimo('Agora informe o limite superior: ')
    let numero = obter_numero('Escolha um número aleatoriamente: ')
    let qtd_numeros = 0
    let num_atual = limite_inferior
    
    
    
    while(num_atual < limite_superior){
        if(num_atual % numero === 0){
            console.log(`Múltiplo de ${numero}: ${num_atual}.`)
            qtd_numeros += 1
            num_atual += 1
        }else{
            num_atual += 1
        }
    }
    console.log(`O número ${numero} tem ${qtd_numeros} múltiplos.`)
    

}


function obter_numero(descricao){
    const numero = Number(question(descricao))
    return numero
}

function obter_numero_minimo(descricao, minimo){
    let numero_minimo = obter_numero(descricao)
    while (limite_superior < limite_inferior){
        numero_minimo = obter_numero(descricao)
        console.log(`ERROR. Informe um valor maior que o ${minimo}!`)
        numero_minimo = obter_numero(descricao)
    }
}

main()