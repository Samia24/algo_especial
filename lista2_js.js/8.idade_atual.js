//8. Leia data atual (dia, mês e ano) e data de nascimento (dia, mês e ano) de uma pessoa, calcule e escreva sua idade exata (em anos).

import { question } from "readline-sync"

function main() {
    // Entrada
    const dia_atual = obter_numero_int('Informe o dia atual (DD): ')
    const mes_atual = obter_numero_int('Informe o mês atual (MM): ')
    const ano_atual = obter_numero_int('Informe o ano atual (AAAA): ')
    const dia_nascimento = obter_numero_int('Informe o dia do seu nascimento (DD): ')
    const mes_nascimento = obter_numero_int('Informe o mês do seu nascimento (MM): ')
    const ano_nascimento = obter_numero_int('Informe o ano do seu nascimento (AAAA): ')

    // Processamento
    const idade_anos = idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    // Saída
    console.log(`\n>> Sua idade é de ${idade_anos} anos.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento) {
    let idade = ano_atual - ano_nascimento

    if (mes_atual <= mes_nascimento && dia_atual < dia_nascimento) {
        idade = idade - 1
        return idade
    } else {
        return idade
    }
}

main()
