const prompt = require("prompt-sync") ();

let valorReais: number = Number (prompt("digite o valor em reais (R$):"));
let cotacaoDolar: number = Number (prompt("digite a cotação do Dolár ex: 5.10: "));

let valorDolares: number = valorReais / cotacaoDolar;

console.log("------------------");
console.log(`conversão realizada com sucesso!`);
console.log (`R$ ${valorReais.toFixed(2)} = US ${valorDolares.toFixed(2)}`);
console.log(`(cotação usada: ${cotacaoDolar})`);
console.log("---------------------");


