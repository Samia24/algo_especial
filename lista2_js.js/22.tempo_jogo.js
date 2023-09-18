//22. Leia a hora do início de um jogo e a hora de fim do jogo (cada hora é composta por 2 variáveis inteiras: hora e minuto). Calcule e escreva a duração do jogo (horas e minutos), sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que ele pode iniciar-se em um dia e terminar no dia seguinte. 

import { question } from "readline-sync"

function main() {
    // Entrada
    const hora_inicial = obter_numero_int('Informe a hora inicial do jogo (HH): ')
    const minutos_inicial = obter_numero_int('Informe os minutos de início do jogo (min): ')
    const hora_final = obter_numero_int('Informe a hora final do jogo (HH): ')
    const minutos_final = obter_numero_int('Informe os minutos de fim de jogo (min): ')

    // Processamento
    const [duracao_h, duracao_min] = calcular_duracao_jogo(hora_inicial, minutos_inicial, hora_final, minutos_final)

    // Saída
    console.log(`\n>> Duração do jogo: ${duracao_h} horas e ${duracao_min} minutos.`)
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function calcular_duracao_jogo(hora_inicial, minutos_inicial, hora_final, minutos_final) {
    let duracao_horas = hora_final - hora_inicial
    let duracao_minutos = minutos_final - minutos_inicial

    if (duracao_horas < 0) {
        duracao_horas += 24
    }

    return [duracao_horas, duracao_minutos]
}

main()
