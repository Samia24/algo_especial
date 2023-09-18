//9. Leia 1 (um) número entre 0 e 100, verifique e escreva se o número é ou não primo.

import { question } from "readline-sync";

function main() {
    // Entrada
    const numero = obter_numero_int('Informe um número entre 0 e 100: ');
    
    // Processamento
    const eh_primo = numero_primo(numero);

    // Saída
    console.log(`\n>> O número ${numero} ${eh_primo}`);
}

function obter_numero_int(descricao) {
    const numero = Number(question(descricao));
    return numero;
}

function numero_primo(num) {
    if (num > 1 && num <= 100) {
        if (num === 2 || num === 3 || num === 5 || num === 7) {
            return 'É PRIMO.';
        } else if (num % 1 === 0 && num % num === 0 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0 && num % 7 !== 0) {
            return 'É PRIMO.';
        } else {
            return 'NÃO É PRIMO.';
        }
    } else {
        return 'não é válido para verificação! Informe um número entre 2 e 100.';
    }
}

main();
