// Com base na tabela abaixo, escreva um algoritmo que leia o código de um item (número inteiro entre 1 e 6) e a quantidade comprada deste item (número inteiro).
const leia = require('readline-sync');
let opcao, i, quant, valor, valorTotal
let produt

for (i = 0; i < 2;i++) {
    opcao = leia.questionInt('\nCodigo do Produto: ');
    quant = leia.questionInt('Quantidade: ');

    switch (opcao) {
        case 1:
            console.log('\nProduto: Cachorro Quente');
            valor = 10
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;
        case 2:
            console.log('\nX-Salada');
            valor = 15
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;
        case 3:
            console.log('\nX-Bacon');
            valor = 18
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;        
        case 4:
            console.log('\nBauru');
            valor = 12
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;        
        case 5:
            console.log('\nRefrigerante');
            valor = 8
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;        
        case 6:
            console.log('\nSuco de Laranja');
            valor = 13
            valorTotal = valor * quant
            console.log("\nValor Total: " + 
                new Intl.NumberFormat('pt-BR', 
                    {style: "currency", 
                    currency: "BRL"
                }).format(valorTotal),
            );
            break;                
    }
}