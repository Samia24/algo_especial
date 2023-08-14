//36.lista1 - Leia a idade de uma pessoa expressa em anos, meses e dias e escreva-a expressa apenas em dias.

import {question} from 'readline-sync'

//Entrada
const anos = Number(question('Informe a idade em anos: '))
const meses = Number(question('Informe a idade em meses: '))
const dias = Number(question('Informe a idade em dias: '))

//Processamento
const id_anos = anos * 365

const id_meses = meses * 30

const soma = id_anos + id_meses + dias

//Saída
console.log(`\n>>> A idade de ${anos} anos, ${meses} meses e ${dias} dias convertida, corresponde à ${soma} dias.`)
