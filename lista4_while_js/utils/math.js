import { obter_numero_positivo } from "./input.js"

export function numero_inteiro(numero, inteiros){
    while (inteiros >= 1 && inteiros < (numero + 1)){
        console.log(inteiros)
        inteiros += 1
    }
}

export function eh_par(numero, contador, num_pares){
    while(contador >= 1 && contador < (numero+1)){
        if (contador % 2 === 0){
            num_pares = contador
            console.log(num_pares)
        }
        contador += 1
    }
}

export function prog_aritmetica(variavel, limite, razao, contador, menor_limite){
    while(contador >= variavel && contador <= (limite+1)){
        if (contador < limite){
            menor_limite = contador
            console.log(menor_limite)
        }
        contador += razao
    }
}

export function prog_geometrica(variavel, limite, razao, contador, menor_limite){
    while(contador >= variavel && contador <= (limite+1)){
        if (contador < limite){
            menor_limite = contador
            console.log(menor_limite)
        }
        contador *= razao
    }
}

export function fatorial_numero(numero, contador, fatorial){
    while(contador <= numero){
        fatorial *= contador
        contador += 1
    }
    console.log(`\n >>> O fatorial de ${numero}! é ${fatorial}.`)
}

export function tabuada(numero, tipo){
    if (tipo === 'SOMAR'){
      tabuada_somar(numero)
    }else if (tipo === 'DIMINUIR'){
      tabuada_diminuir(numero)
    }else if (tipo === 'MULTIPLICAR'){
      tabuada_multiplicar(numero)
    }else if (tipo === 'DIVIDIR'){
      tabuada_dividir(numero)
    }else{
      print('Tipo inválido!')
    }
  }

export function tabuada_somar(numero){
    let parcela = 1
    console.log('\n>>> SOMAR <<<')
    console.log('---------------')
    
    while (parcela <= 10){
      const soma = numero + parcela
      console.log(`${numero} + ${parcela} = ${soma}`)
      parcela++
    }
  }
  
  export function tabuada_diminuir(numero){
    let minueno = numero
    console.log('\n>>> DIMINUIR <<<')
    console.log('------------------')
    while (minueno <= (numero + 9)){
      const diferenca = minueno - numero
      console.log(`${minueno} - ${numero} = ${diferenca}`)
      minueno++
    }
  }
  
  export function tabuada_multiplicar(numero){
    let fator = 1
    console.log('\n>>> MULTIPLICAR <<<')
    console.log('---------------------')
    
    while (fator <= 10){
      const produto = numero * fator
      console.log(`${numero} * ${fator} = ${produto}`)
      fator++
    }
  }
  
  
  export function tabuada_dividir(numero){
    let dividendo = numero
    console.log('\n>>> DIVIDIR <<<')
    console.log('-----------------')
    
    while (dividendo <= (10 * numero)){
      const quociente = dividendo / numero
      console.log(`${dividendo} ÷ ${numero} = ${quociente}`)
      dividendo = dividendo + numero
    }
}

export function somar_inteiros(numero, contador, soma){
    while(contador > 1 && contador < numero){
        soma += contador
        contador += 1
    }
    console.log(`\n >>> A soma dos números inteiros entre 1 e ${numero} é ${soma}.`)
}

export function numeros_multiplos(numero, limite_inferior, limite_superior, contador, multiplos){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % numero === 0){
            multiplos = contador
            console.log(multiplos)
        }
        contador += 1
    }

    if (multiplos === 0){
        console.log(`\nNão há múltiplos de ${numero} entre ${limite_inferior} e ${limite_superior}.\n`)
    }
}

export function numeros_pares(limite_inferior, limite_superior, contador, pares){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % 2 === 0){
            pares = contador
            console.log(pares)
        }
        contador += 1
    }
    console.log(`---------------------------\n`)
}

export function numeros_impares(limite_inferior, limite_superior, contador, impares){
    while(contador >= limite_inferior && contador < limite_superior){
        if(contador % 2 !== 0){
            impares = contador
            console.log(impares)
        }
        contador += 1
    }
    console.log(`---------------------------\n`)
}

export function num_primos(contador, limite_superior) {
    while (contador <= limite_superior) {
        if (contador > 1) {
            let divisor = 2;
            let eh_primo = true;

            while (divisor * divisor <= contador && eh_primo) {
                if (contador % divisor === 0) {
                    eh_primo = false;
                }
                divisor += 1;
            }

            if (eh_primo) {
                console.log(contador);
            }
        }

        contador += 1;
    }
}

export function soma_media(n, contador, soma, media){
    while (contador <= n){
        let numeros = obter_numero_positivo(`Informe o ${contador}º número: `)
        soma += numeros
        contador += 1
     }
     media = soma / n
     return {soma, media}
}

export function maior_numero(n, contador, maior){
    while (contador <= n){
        let numeros = obter_numero_positivo(`Informe o ${contador}º número: `)
        if (numeros > maior){
            maior = numeros
        }
        contador += 1
     }
     return maior
}

export function valor_maior_quadrado(n, contador, maiorQuadrado){
    while (contador <= n){
        let quadrado = contador * contador
        if (quadrado <= n){
            maiorQuadrado = contador
        }
        contador++
    }
    return maiorQuadrado
}

export function sequencia(n, contador, termoAtual){
    while (contador <= n) {
        console.log(termoAtual)
        termoAtual += contador + 1
        contador++
    }
}

export function fibonacci(n, contador, termoAnterior, termoAtual){
    while (contador < n) {
        let proximoTermo = termoAnterior + termoAtual
    
        console.log(proximoTermo)
    
        termoAnterior = termoAtual
        termoAtual = proximoTermo
    
        contador++
        }
    
}