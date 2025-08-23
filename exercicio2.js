/*
 Elabore um algoritmo em JavaScript que leia 4 notas de um participante, exiba na tela a média final do participante. Veja o exemplo abaixo:
*/

const leia = require('readline-sync');

let nota1, nota2, nota3, nota4, media, soma, resul
nota1 = leia.questionFloat('Digite a nota 1: ');
nota2 = leia.questionFloat('Digite a nota 2: ');
nota3 = leia.questionFloat('Digite a nota 3: ');
nota4 = leia.questionFloat('Digite a nota 4: ');

media = (nota1 + nota2 + nota3 + nota4) / 4

console.log('Média final: %f', media.toFixed(1));