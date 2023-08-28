import { question } from "readline-sync"

function main(){
    //Pedir dados
    console.log('\n>>>>> CÁLCULO DE JUROS DE CARTÃO DE CRÉDITO ROTATIVO <<<<<')
    const valor_fatura = Number(question('Informe o valor da fatura: R$ '))
    const taxa_rotativo = Number(question('Informe o valor da taxa de crédito rotativo (%): '))
    
    //Entrada de dados do Plano 1
    console.log('\n---- Plano 1 ----')
    const valor_pago1 = Number(question('Informe o valor pago: R$ '))
    const meses_em_atraso1 = Number(question('Informe a quantidade de meses em atraso para pagamento total da fatura: '))
    
    //Calcula os dados para Plano 1
    const capital_1 = (valor_fatura - valor_pago1)
    const montante_1 = calcular_juros_compostos(capital_1, taxa_rotativo, meses_em_atraso1)
    const juros_1 = montante_1 - capital_1
    const valor_total_1 = capital_1 + juros_1

    //Entrada de dados do Plano 2
    console.log('\n---- Plano 2 ----')
    const valor_pago2 = Number(question('Informe o valor pago: R$ '))
    const meses_em_atraso2 = Number(question('Informe a quantidade de meses em atraso para pagamento total da fatura: '))

    //Calcula os dados para Plano 2
    const capital_2 = (valor_fatura - valor_pago2)
    const montante_2 = calcular_juros_compostos(capital_2, taxa_rotativo, meses_em_atraso2)
    const juros_2 = montante_2 - capital_2
    const valor_total_2 = capital_2 + juros_2

    //Mostrar valores do plano 1
    console.log('\n>>>>> RESULTADO PLANO 1 <<<<<')
    console.log(`Valor da fatura            : R$ ${valor_fatura.toFixed(2)}.`)
    console.log(`Valor pago                 : R$ ${valor_pago1.toFixed(2)}.`)
    console.log(`Meses em atraso            : ${meses_em_atraso1} meses.`)
    console.log(`Juros sob o débito pendente: R$ ${juros_1.toFixed(2)}.`)
    console.log(`Saldo devedor (sem juros)  : R$ ${capital_1.toFixed(2)}.`)
    console.log(`---> Fatura em ${meses_em_atraso1} meses será de R$ ${valor_total_1.toFixed(2)}.`)

    //Mostrar valores do plano 2
    console.log('\n>>>>> RESULTADO PLANO 2 <<<<<')
    console.log(`Valor da fatura            : R$ ${valor_fatura.toFixed(2)}.`)
    console.log(`Valor pago                 : R$ ${valor_pago2.toFixed(2)}.`)
    console.log(`Meses em atraso            : ${meses_em_atraso2} meses.`)
    console.log(`Juros sob o débito pendente: R$ ${juros_2.toFixed(2)}.`)
    console.log(`Saldo devedor (sem juros)  : R$ ${capital_2.toFixed(2)}.`)
    console.log(`---> Fatura em ${meses_em_atraso2} meses será de R$ ${valor_total_2.toFixed(2)}.`)

    
function calcular_juros_compostos(capital, taxa, tempo){
    return capital * ((1 + taxa/100)**tempo)
}
}

main()