// Desenvolva um algoritmo que leia 3 valores inteiros A, B e C e imprima na tela se a soma de A + B é maior, menor ou igual a C.

const leia = require('readline-sync');

let A, B, C, soma, i

for(i = 0; i < 3; i++){
    A = leia.questionInt('\nDigite o numero A: ');
    B = leia.questionInt('Digite o numero B: ');
    C = leia.questionInt('Digite o numero C: ');

    soma = A + B

    if(soma > C) {
        console.log('\n',A, '+', B, '=', soma, '>', C);
        console.log("\nA soma de A + B é Maior do que C")
    }else if (soma < C) {
        console.log('\n',A, '+', B, '=', soma, '<', C);
        console.log("A soma de A + B é Menor do que C")
    }else{
        console.log('\n',A, '+', B, '=', soma, '=', C);
        console.log("A soma de A + B é Igual a C")
    }
}

    