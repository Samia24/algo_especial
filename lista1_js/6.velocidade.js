//6. Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
import { question } from "readline-sync"
//Entrada
const velocidade_m_s = Number(question('Informe a velocidade em metros por segundo: '))

//Processamento
const velocidade_km_h = velocidade_m_s / 3.6

//Saída
console.log(`\n>>> A velocidade de ${velocidade_m_s.toFixed(1)}m/s equivale a ${velocidade_km_h.toFixed(1)}km/h.`)