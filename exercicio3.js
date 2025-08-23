/*
    Elabore um algoritmo em JavaScript , que leia o Salário Bruto, o Adicional Noturno, as Horas Extras e os Descontos de um Colaborador, exiba na tela o Salário Líquido.
*/
const leia = require('readline-sync');

let salBruto, adicioNoturno, horasExtras, descontos, salLiquido
salBruto = leia.questionFloat('Digite o salario bruto: ');
adicioNoturno = leia.questionFloat('Digite o adicional noturno: ');
horasExtras = leia.questionFloat('Digite as horas extras: ');
descontos = leia.questionFloat('Digite aos descontos: ');

salLiquido = salBruto + adicioNoturno + (horasExtras * 5) - descontos
console.log('Sálario Líquido: %f', salLiquido.toFixed(2));