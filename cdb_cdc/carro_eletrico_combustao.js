//Carro Elétrico / Combustão

import { question } from "readline-sync"

//Entrada
const distancia_total = Number(question('Informe a distância total prevista, em Km, da viagem: '))
const perc_motor_eletrico = Number(question('Informe o percentual (%) da viagem usando o motor elétrico: '))
const km_litro_alcool = Number(question('Informe quantos Km seu carro faz com 1L de álcool: '))
const km_litro_gasolina = Number(question('Informe quantos Km seu carro faz com 1L de gasolina: '))
const valor_litro_alcool = Number(question('Informe o valor do litro de álcool: R$ '))
const valor_litro_gasolina = Number(question('Informe o valor do litro de gasolina: R$ '))

//Processamento
const km_motor_eletrico = (distancia_total * perc_motor_eletrico) / 100
const km_restante = distancia_total - km_motor_eletrico

const qtd_litro_gasolina = km_restante / km_litro_gasolina
const valor_gasto_gasolina = valor_litro_gasolina * qtd_litro_gasolina

const qtd_litro_alcool = km_restante / km_litro_alcool
const valor_gasto_alcool = valor_litro_alcool * qtd_litro_alcool

//Saída
console.log('\n>>>>>>>>>> TABELA COMPARATIVA <<<<<<<<<<')
console.log('\n-----> ABASTECIMENTO À GASOLINA <-----')
console.log(`°°° A quantidade de litros de gasolina necessária para completar ${km_restante}km da viagem é de ${qtd_litro_gasolina.toFixed(1)}L.`)
console.log(`°°° O valor necessário de abastecimento a gasolina é de R$ ${valor_gasto_gasolina.toFixed(2)}.`)
console.log('\n-------------------------------------------------------------------------------------------------------------')
console.log('\n-----> ABASTECIMENTO À ÁLCOOL <-----')
console.log(`°°° A quantidade de litros de álcool necessária para completar ${km_restante}km da viagem é de ${qtd_litro_alcool.toFixed(1)}L.`)
console.log(`°°° O valor necessário de abastecimento a álcool é de R$ ${valor_gasto_alcool.toFixed(2)}.\n`)