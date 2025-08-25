// Com base na tabela abaixo, escreva um algoritmo que leia o Nome do Colaborador (string), o Código do Cargo do Colaborador (número inteiro entre 1 e 6) e o Salário (número real).

const leia = require('readline-sync');
let codigo, i, salario, percentualReajuste, novoSalario
let nome, cargo

for (i = 0; i < 2;i++){
    nome = leia.question('\nNome do Colaborador: ');
    codigo = leia.questionInt('Cargo: ');
    salario = leia.questionFloat('Salario: R$ ');

    switch (codigo) {
        case 1:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Gerente')
            novoSalario = salario + ((salario * 10)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;
        
        case 2:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Vendedor')
            novoSalario = salario + ((salario * 7)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;
        
        case 3:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Supervisor')
            novoSalario = salario + ((salario * 9)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;
        
        case 4:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Motorista')
            novoSalario = salario + ((salario * 6)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;
        
        case 5:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Estoquista')
            novoSalario = salario + ((salario * 5)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;

        case 6:
            console.log("\nNome do colaborador: " + nome);
            console.log('Cargo: Técnico TI')
            novoSalario = salario + ((salario * 8)/100);
            console.log("Salario: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(novoSalario),
            );
            break;

        default:
            console.log("\nOpção inválida!");
    }
}
