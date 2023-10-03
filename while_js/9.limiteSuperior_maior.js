import { question } from "readline-sync"

function main() {
  const limite_inferior = obter_numero('Informe um limite inferior de uma faixa numérica: ')
  const limite_superior = obter_numero_minimo('Agora informe o limite superior: ', limite_inferior)
  const numero = obter_numero('Escolha um número aleatoriamente: ')

  let num_atual = limite_inferior
  let qtd_numeros = 0

  console.log(`\n>>> Múltiplo de ${numero}: `)
  while (num_atual <= limite_superior) {
    if (num_atual % numero === 0) {
      console.log(num_atual)
      qtd_numeros += 1
    }
    num_atual += 1
  }

  if (qtd_numeros === 0) {
    console.log(`Nenhum número entre ${limite_inferior} e ${limite_superior} é múltiplo de ${numero}.`)
  }
}

function obter_numero(descricao) {
  const numero = Number(question(descricao))
  return numero
}

function obter_numero_minimo(descricao, minimo) {
  let numero_minimo = obter_numero(descricao)
  while (numero_minimo <= minimo) {
    console.log(`ERROR. Informe um valor maior que o ${minimo}!`)
    numero_minimo = obter_numero(descricao)
  }
  return numero_minimo
}

main()
