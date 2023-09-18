//26. Leia os 3 (três) lados de um triângulo e identifique sua hipotenusa e seus catetos.
import { question } from "readline-sync"

function main() {
    // Entrada
    const lado_1 = obterNumeroFloat('Informe o valor do 1º lado do triângulo: ')
    const lado_2 = obterNumeroFloat('Informe o valor do 2º lado do triângulo: ')
    const lado_3 = obterNumeroFloat('Informe o valor do 3º lado do triângulo: ')

    // Processamento
    const [hipotenusa, cateto1, cateto2] = calcularHipotenusaCatetos(lado_1, lado_2, lado_3)

    // Saída
    console.log(`\n>> O valor da hipotenusa do triângulo é: ${hipotenusa}cm;\n O valor dos catetos é: ${cateto1} e ${cateto2} cm.`);
}

function obterNumeroFloat(descricao) {
    const numero = Number(question(descricao))
    return numero
}

function calcularHipotenusaCatetos(lado1, lado2, lado3) {
    const quadradoLado1 = lado1 ** 2
    const quadradoLado2 = lado2 ** 2
    const quadradoLado3 = lado3 ** 2

    if (quadradoLado1 === quadradoLado2 + quadradoLado3) {
        const hipotenusa = lado1
        const cateto1 = lado2
        const cateto2 = lado3
        return [hipotenusa, cateto1, cateto2]
    } else if (quadradoLado2 === quadradoLado1 + quadradoLado3) {
        const hipotenusa = lado2
        const cateto1 = lado1
        const cateto2 = lado3
        return [hipotenusa, cateto1, cateto2]
    } else if (quadradoLado3 === quadradoLado1 + quadradoLado2) {
        const hipotenusa = lado3
        const cateto1 = lado1
        const cateto2 = lado2
        return [hipotenusa, cateto1, cateto2]
    }
}

main()
