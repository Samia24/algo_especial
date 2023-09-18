//27. Determine a idade de uma pessoa, em anos, meses e dias, dadas a data (dia, mês e ano) do seu nascimento e a data (dia, mês e ano) atual.

import { question } from "readline-sync"

function main() {
    // Entrada
    const dia_atual = obterNumero('Informe o dia atual (DD): ')
    const mes_atual = obterNumero('Informe o mês atual (MM): ')
    const ano_atual = obterNumero('Informe o ano atual (AAAA): ')
    const dia_nascimento = obterNumero('Informe o dia do seu nascimento (DD): ')
    const mes_nascimento = obterNumero('Informe o mês do seu nascimento (MM): ')
    const ano_nascimento = obterNumero('Informe o ano do seu nascimento (AAAA): ')

    // Processamento
    const [id_anos, id_meses, id_dias] = idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento)

    // Saída
    console.log(`\n>> Sua idade é de ${id_anos} anos, ${id_meses} meses e ${id_dias} dias.`)
}

function obterNumero(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function idade_atual(dia_atual, mes_atual, ano_atual, dia_nascimento, mes_nascimento, ano_nascimento) {
    if (mes_atual < mes_nascimento && dia_atual < dia_nascimento) {
        const idade_a = (ano_atual - ano_nascimento) - 1
        const idade_m = 12 - (Math.abs(mes_atual - mes_nascimento))
        const idade_d = Math.abs(dia_atual - dia_nascimento)
        return [idade_a, idade_m, idade_d]
    } else if (mes_atual < mes_nascimento && dia_atual > dia_nascimento) {
        const idade_a = (ano_atual - ano_nascimento) - 1
        const idade_m = 12 - ((Math.abs(mes_atual - mes_nascimento)) - 1)
        if (mes_atual === 4 || mes_atual === 6 || mes_atual === 9 || mes_atual === 11) {
            const idade_m = 12 - (Math.abs(mes_atual - mes_nascimento))
            const idade_d = 30 - (Math.abs(dia_atual - dia_nascimento))
            return [idade_a, idade_m, idade_d]
        } else if (mes_atual === 2) {
            const idade_m = 12 - (Math.abs(mes_atual - mes_nascimento))
            if (ano_atual % 4 === 0 && ano_atual % 100 === 0 && ano_atual % 400 === 0) {
                const idade_d = 29 - (Math.abs(dia_atual - dia_nascimento))
                return [idade_a, idade_m, idade_d]
            } else if (ano_atual % 4 === 0 && ano_atual % 100 !== 0) {
                const idade_d = 29 - (Math.abs(dia_atual - dia_nascimento))
                return [idade_a, idade_m, idade_d]
            }
        } else {
            const idade_d = 31 - (Math.abs(dia_atual - dia_nascimento))
            return [idade_a, idade_m, idade_d]
        }
    } else if (mes_atual === mes_nascimento && dia_atual < dia_nascimento) {
        const idade_m = Math.abs(mes_atual - mes_nascimento)
        const idade_a = (ano_atual - ano_nascimento) - 1
        return [idade_a, idade_m, idade_d]
    } else if (mes_atual === mes_nascimento && dia_atual === dia_nascimento) {
        const idade_a = (ano_atual - ano_nascimento)
        const idade_m = Math.abs(mes_atual - mes_nascimento)
        const idade_d = Math.abs(dia_atual - dia_nascimento)
        return [idade_a, idade_m, idade_d]
    } else {
        const idade_a = (ano_atual - ano_nascimento)
        const idade_m = (Math.abs(mes_atual - mes_nascimento)) - 1
        if (mes_atual === 4 || mes_atual === 6 || mes_atual === 9 || mes_atual === 11) {
            const idade_d = 30 - (Math.abs(dia_atual - dia_nascimento))
            return [idade_a, idade_m, idade_d]
        } else if (mes_atual === 2) {
            if (ano_atual % 4 === 0 && ano_atual % 100 === 0 && ano_atual % 400 === 0) {
                const idade_d = 29 - (Math.abs(dia_atual - dia_nascimento))
                return [idade_a, idade_m, idade_d]
            } else if (ano_atual % 4 === 0 && ano_atual % 100 !== 0) {
                const idade_d = 29 - (Math.abs(dia_atual - dia_nascimento))
                return [idade_a, idade_m, idade_d]
            }
        } else {
            const idade_d = 31 - (Math.abs(dia_atual - dia_nascimento))
            return [idade_a, idade_m, idade_d]
        }
    }
}

main()
