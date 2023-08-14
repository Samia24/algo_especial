//41.lista1 - O custo ao consumidor de um carro novo é a soma do custo de fábrica com a percentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que a percentagem do distribuidor seja de 28% e os impostos de 45%, escreva um algoritmo que leia o custo de fábrica de um carro e escreva o custo ao consumidor.

import {question} from 'readline-sync'

//Entrada
const custo_fab = Number(question('Informe o custo de fábrica de um carro novo: '))

// Processamento
const perc_dis_imp = custo_fab * 0.28 * 0.45 
const custo_consum = custo_fab + perc_dis_imp

//Saída
console.log(`\n>>> O custo do consumidor (valor de fábrica + percentual que corresponde a R$${perc_dis_imp.toFixed(2)}) é de R$${custo_consum.toFixed(2)}.`)
