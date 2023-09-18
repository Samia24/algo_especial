//16. Leia duas notas de um aluno e escreva na tela a palavra “Aprovado” se a média das duas notas for maior ou igual a 7,0. Caso a média seja inferior a 7,0, o programa deve ler a nota do exame e calcule a média final. Se esta média for maior ou igual a 5,0, o programa deve escreva “Aprovado”, caso contrário deve escreva “Reprovado”.

import { question } from "readline-sync"

function main() {
    // Entrada
    const nota1 = obter_numero_float('Digite a primeira nota: ')
    const nota2 = obter_numero_float('Digite a segunda nota: ')

    // Processamento
    const media_final = media(nota1, nota2)

    // Saída
    console.log(`\n>>> O aluno foi ${media_final}.`)
}

function obter_numero_float(descricao) {
    const numero = parseFloat(question(descricao))
    return numero
}

function media(nota1, nota2) {
    const media = (nota1 + nota2) / 2
    if (media < 7) {
        const notaEF = obter_numero_float('Informe sua nota no exame final: ')
        const media_f = (media + notaEF) / 2
        if (media_f >= 5) {
            return 'Aprovado no EF'
        } else {
            return 'Reprovado no EF'
        }
    } else {
        return 'Aprovado direto'
    }
}

main()
