import { question } from "readline-sync"

function main(){
    //Pedir dados CDB
    console.log('\n>>>>> SIMULADOR DE CDB <<<<<')
    const valor_investido = Number(question('Informe o valor investido: R$ '))
    const taxa_cdb = Number(question('Informe o valor da taxa do CDB (entre 1% e 20%): '))
    const ano_a_sacar = Number(question('Informe o ano para saque do valor investido (AAAA): '))

    //Calcular juros CDB
    const tempo = calcular_tempo_anos(ano_a_sacar)
    const montante_cdb = calcular_juros_compostos(valor_investido, taxa_cdb, tempo)
    const juros_cdb = montante_cdb - valor_investido
    const valor_a_sacar = valor_investido + juros_cdb
    const rendimento_cdb = (juros_cdb / valor_investido) * 100

    //Mostrar dados CDB
    console.log('\n>>>>>>>>>> RESULTADO CDB <<<<<<<<<<')
    console.log(`---> Valor investido inicialmente no CDB                  : R$ ${valor_investido.toFixed(2)}.`)
    console.log(`---> Valor total investido no CDB somado aos juros obtidos: R$ ${valor_a_sacar.toFixed(2)}.`)
    console.log(`---> Juros do CDB                                         : R$ ${juros_cdb.toFixed(2)}.`)
    console.log(`---> Rendimento do investimento (%)                       : ${rendimento_cdb.toFixed(1)}%.`)
    console.log('--------------------------------------------')

    //Pedir dados CDC
    console.log('\n>>>>> SIMULADOR DE CDC <<<<<')
    const taxa_cdc = Number(question('Informe o valor da taxa do CDB (entre 1% e 17%): '))
    const valor_emprestado = valor_investido
    const prazo_meses = calcular_tempo_meses(ano_a_sacar)

    //Calcular juros CDC
    const montante_cdc = calcular_juros_compostos(valor_emprestado, taxa_cdc, prazo_meses)
    const juros_cdc = montante_cdc - valor_emprestado
    const valor_a_pagar = valor_emprestado + juros_cdc
    const rendimento_cdc = (juros_cdc / valor_emprestado) * 100
    const parcela = valor_a_pagar / prazo_meses

    //Mostrar dados CDC
    console.log('\n>>>>>>>>>> RESULTADO CDC <<<<<<<<<<')
    console.log(`---> Valor do empréstimo inicial no CDC                   : R$ ${valor_emprestado.toFixed(2)}.`)
    console.log(`---> Valor total emprestado no CDC somado aos juros       : R$ ${valor_a_pagar.toFixed(2)}.`)
    console.log(`---> Juros do CDC                                         : R$ ${juros_cdc.toFixed(2)}.`)
    console.log(`---> Rendimento do empréstimo (%)                         : ${rendimento_cdc.toFixed(1)}%.`)
    console.log(`---> Valor das parcelas                                   : ${prazo_meses.toFixed(0)} x R$ ${parcela.toFixed(2)}.`)
    console.log('--------------------------------------------')

    //Lucros do banco
    const lucro_banco = juros_cdc - juros_cdb
    
    console.log('\n>>>>>>>>>> LUCROS DO BANCO <<<<<<<<<<')
    console.log(`---> Lucro do banco: R$ ${lucro_banco.toFixed(2)}.\n`)

function calcular_tempo_anos(ano){
    return ano - 2023
}

function calcular_tempo_meses(ano){
    return (calcular_tempo_anos(ano) * 12)
}

function calcular_juros_compostos(capital, taxa, tempo){
    return capital * ((1 + (taxa/100)) ** tempo)
}

}

main()