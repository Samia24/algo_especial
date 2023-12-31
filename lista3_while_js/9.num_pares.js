//9. Leia LimiteSuperior e LimiteInferior e escreva todos os números pares entre os limites lidos.

import { obter_numero } from "./utils/input.js"
import { numeros_pares } from "./utils/math.js"

function main(){
    const limite_inferior = obter_numero('Informe um número mínimo para uma faixa numérica: ')
    const limite_superior = obter_numero('Informe um número máxima para uma faixa numérica: ')

    let contador = limite_inferior
    let pares = 0
    
    console.log(`\n >>> Números pares:`)
    numeros_pares(limite_inferior, limite_superior, contador, pares)
}

main()