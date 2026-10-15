/* Operator Ternático */
 /* Exercício 1 - Maior de idade */

let idade = 18;

let resultado1 = idade >= 18 ? "Maior de idade" : "Menor de idade";

console.log(resultado1);


/* Exercício 2 - Número Par ou Ímpar */

let numero = 10;

let resultado2 = numero % 2 === 0 ? "Par" : "Ímpar";

console.log(resultado2);


/* Exercício 3 - Aprovado ou Reprovado */

let nota = 8;

let resultado3 = nota >= 7 ? "Aprovado" : "Reprovado";

console.log(resultado3);


/* Exercício 4 - Maior Número */

let num1 = 20;
let num2 = 15;

let maior = num1 > num2 ? num1 : num2;

console.log(maior);


/* Exercício 5 - Desconto */

let valor = 150;

let valorFinal = valor >= 100 ? valor * 0.9 : valor;

console.log(valorFinal);


/* Exercício 6 - Positivo, Negativo ou Zero */

let numero2 = -5;

let resultado4 = numero2 > 0
    ? "Positivo"
    : numero2 < 0
    ? "Negativo"
    : "Zero";

console.log(resultado4);
/* Laços de Repetição - While */
/* Exercício 1 - Contador */

let i1 = 1;

while (i1 <= 10) {
    console.log(i1);
    i1++;
}


/* Exercício 2 - Contagem Regressiva */

let i2 = 10;

while (i2 >= 1) {
    console.log(i2);
    i2--;
}


/* Exercício 3 - Verificação de Senha */

let senha = "1111";

while (senha !== "12345") {
    console.log("Senha incorreta.");
    senha = "12345";
}

console.log("Senha correta!");


/* Exercício 4 - Sequência Numérica */

let i3 = 0;

while (i3 <= 100) {
    console.log(i3);
    i3 += 5;
}


/* Exercício 5 - Mostrando Mensagem */

let i4 = 1;

while (i4 <= 5) {
    console.log("Eu gosto de JavaScript");
    i4++;
}

/* Laço de Repetição - Do…While: */
/* Exercício 1 - Contador */

let i5 = 1;

do {
    console.log(i5);
    i5++;
} while (i5 <= 20);


/* Exercício 2 - Resposta do Usuário */

const prompt = require("prompt-sync")();

let resposta;

do {
    resposta = prompt("Deseja continuar? (s/n): ");
} while (resposta === "s");

console.log("Programa encerrado.");


/* Exercício 3 - Sequência Numérica */

let numeroFinal = Number(prompt("Digite o número final: "));
let i6 = 1;

do {
    console.log(i6);
    i6++;
} while (i6 <= numeroFinal);


/* Exercício 4 - Contador */

let i7 = 1;

do {
    console.log(i7);
    i7 += 2;
} while (i7 <= 31);

/* Laço de Repetição - For:  */
/* Exercício 1 - Contador */

for (let i8 = 1; i8 <= 30; i8++) {
    console.log(i8);
}


/* Exercício 2 - Contagem Regressiva */

for (let i9 = 30; i9 >= 1; i9--) {
    console.log(i9);
}


/* Exercício 3 - Contagem Personalizada */

let inicio = 5;
let fim = 15;

for (let i10 = inicio; i10 <= fim; i10++) {
    console.log(i10);
}


/* Exercício 4 - Sequência */

for (let i11 = 50; i11 >= 30; i11--) {
    console.log(i11);
}


/* Exercício 5 - Números Alternados */

for (let i12 = 1; i12 <= 50; i12 += 2) {
    console.log(i12);
}
 
/* Array: */
/* Exercício 1 - Filmes Favoritos */

let filmes = ["Avatar", "Vingadores", "Moana"];

console.log(filmes[0]);


/* Exercício 2 - Criando e Acessando um Array */

let frutas = ["Maçã", "Banana", "Uva", "Laranja", "Morango"];

console.log(frutas[2]);


/* Exercício 3 - Adicionando Elementos */

let cores = ["Azul", "Verde", "Vermelho"];

cores.push("Amarelo");

for (let i13 = 0; i13 < cores.length; i13++) {
    console.log(cores[i13]);
}


/* Exercício 4 - Removendo Elementos */

let numeros = [10, 20, 30, 40];

numeros.pop();

for (let i14 = 0; i14 < numeros.length; i14++) {
    console.log(numeros[i14]);
}


/* Exercício 5 - Adicionando no Início */

let cidades = ["Suzano", "Mogi das Cruzes"];

cidades.unshift("São Paulo");

for (let i15 = 0; i15 < cidades.length; i15++) {
    console.log(cidades[i15]);
}
