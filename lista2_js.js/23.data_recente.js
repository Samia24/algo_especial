//23. Leia 2 datas (cada data é composta por 3 variáveis inteiras: dia, mês e ano) e escreva qual delas é a mais recente.

import { question } from "readline-sync"

function main() {
    // Entrada
    const dia_1 = obter_numero_int('Informe o dia 1 (DD): ')
    const mes_1 = obter_numero_int('Informe o mês 1 (MM): ')
    const ano_1 = obter_numero_int('Informe o ano 1 (AAAA): ')
    const dia_2 = obter_numero_int('Informe o dia 2 (DD): ')
    const mes_2 = obter_numero_int('Informe o mês 2 (MM): ')
    const ano_2 = obter_numero_int('Informe o ano 2 (AAAA): ')

    // Processamento
    const [dia_rec, mes_rec, ano_rec] = data_recente(dia_1, mes_1, ano_1, dia_2, mes_2, ano_2)

    // Saída
    console.log(`\n>>> A data mais recente é ${dia_rec}/${mes_rec}/${ano_rec}.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function data_recente(dia1, mes1, ano1, dia2, mes2, ano2) {
    if (ano1 <= ano2) {
        if (mes1 <= mes2) {
            if (dia1 < dia2) {
                return [dia2, mes2, ano2]
            } else {
                return [dia1, mes1, ano1]
            }
        } else {
            return [dia1, mes1, ano1]
        }
    } else {
        return [dia1, mes1, ano1]
    }
}

main()
