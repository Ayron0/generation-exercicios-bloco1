// Escreva um algoritmo que leia um número inteiro via teclado e mostre na tela uma mensagem indicando se este número é par ou ímpar e se o número é positivo ou negativo.

const leia = require('readline-sync');

let numero, i
let tipo, sinal

for(i = 0; i < 4; i++) {
    numero = leia.questionInt('Digite um numero: ');

    if( numero % 2 == 0 ){
        tipo = 'par';
    }else {
        tipo = 'ímpar';
    }

    numero > 0 ? sinal = 'positivo': sinal = 'negativo';

    console.log('\nO Numero', numero, 'é', tipo, 'e', sinal,'!');
}