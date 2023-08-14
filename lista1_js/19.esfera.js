//19. Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)

import { question } from "readline-sync"

//Entrada
const raio = Number(question('Informe o valor do raio de uma esfera: '))


//Processamento
const volume = (4 * 3.14 * (raio ** 3)) / 3

//Saída
console.log(`\n>>> O volume da esfera é de ${volume.toFixed(1)}cm.`)