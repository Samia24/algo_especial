//16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2. Leia N, calcule e escreva o valor de S.

import { obter_numero_minimo } from "./utils/input.js";
import { fibonacci } from "./utils/math.js";

function main(){
    const n = obter_numero_minimo("Digite um número para N (maior ou igual a 2): ", 2);

    let termoAnterior = 0
    let termoAtual = 1

    console.log(`Os ${n} primeiros termos da sequência de Fibonacci: `)
    
    console.log(0)
    console.log(1)
   
    let contador = 2

    const seq_fibonacci = fibonacci(n, contador, termoAnterior, termoAtual)


}

main()