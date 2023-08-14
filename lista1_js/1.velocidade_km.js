// 1. Leia uma velocidade em m/s, calcule e escreva esta velocidade em km/h. (Vkm/h = Vm/s * 3.6)

import {question} from 'readline-sync'

//Entrada
const velocidade_metros = Number(question('Informe uma velocidade em m/s: '))

//Processamento
const velocidade_km = velocidade_metros * 3.6

//Saída
console.log(`A velocidade em quilômetros por hora é de ${velocidade_km} km/h.`)