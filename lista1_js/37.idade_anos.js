//37.lista1 - Leia a idade de uma pessoa expressa em dias e escreva-a expressa em anos, meses e dias.

import {question} from 'readline-sync'

//Entrada
const dias = Number(question('Informe a idade em dias: '))

//Processamento
const id_anos = Math.floor(dias / 365)
const meses = dias % 365
const id_meses = Math.floor(meses / 30)
const d = meses % 30

//Saída
console.log(`\n>>> A idade de ${dias} dias convertida, corresponde à ${id_anos} anos, ${id_meses} meses e ${d} dias.`)
