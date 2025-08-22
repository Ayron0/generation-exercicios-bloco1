const leia = require('readline-sync');

let salario = leia.questionFloat('Digite o Salario: ');
let abono = leia.questionFloat('Digite o abono: ');
let novoSalario = salario + abono

console.log("Novo salario: " + 
    new Intl.NumberFormat('pt-BR', 
        {style: "currency", 
        currency: "BRL"
    }).format(novoSalario),
);