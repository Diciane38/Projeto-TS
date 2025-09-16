var prompt = require("prompt-sync")();
var valorReais = Number(prompt("digite o valor em reais (R$):"));
var cotacaoDolar = Number(prompt("digite a cotação do Dolár ex: 5.10: "));
var valorDolares = valorReais / cotacaoDolar;
console.log("------------------");
console.log("convers\u00E3o realizada com sucesso!");
console.log("R$ ".concat(valorReais.toFixed(2), " = US ").concat(valorDolares.toFixed(2)));
console.log("(cota\u00E7\u00E3o usada: ".concat(cotacaoDolar, ")"));
console.log("---------------------");
