

// 1 - Manipulando Texto
let frase = prompt("Digite uma frase:");

console.log("Quantidade de caracteres:", frase.length);
console.log("Maiúsculas:", frase.toUpperCase());
console.log("Minúsculas:", frase.toLowerCase());

let palavraAntiga = prompt("Qual palavra deseja substituir?");
let palavraNova = prompt("Digite a nova palavra:");

console.log("Nova frase:", frase.replace(palavraAntiga, palavraNova));

let procurar = prompt("Qual palavra deseja verificar?");
console.log("Existe a palavra?", frase.includes(procurar));

console.log("Caractere da posição 5:", frase.charAt(5));
console.log("-------------------------------------")
// 2- Funções Matemáticas
let numero = Math.floor(Math.random() * 10) + 1;

let resposta = Number(prompt("Adivinhe um número entre 1 e 10"));

if (resposta === numero) {
    alert("Parabéns! Você acertou.");
} else {
    alert("Você errou. O número era " + numero);
}
console.log("-------------------------------------")
// 2-  Arredondando valores
let numero2 = Number(prompt("Digite um número decimal"));

console.log("Para cima: " + Math.ceil(numero));
console.log("Para baixo: " + Math.floor(numero));
console.log("Arredondado: " + Math.round(numero));

console.log("-------------------------------------")
//2- Manipulando números
let numeros = [10, 5, 18, 3, 25, 40, 12, 7, 31, 15];

console.log("Maior número: " + Math.max(...numeros));
console.log("Menor número: " + Math.min(...numeros));
console.log("-------------------------------------")
// 2- Novos valores
let numero3 = Number(prompt("Digite um número"));

console.log("Valor absoluto: " + Math.abs(numero));
console.log("Elevado à sexta potência: " + Math.pow(numero, 6));
console.log("Raiz quadrada: " + Math.sqrt(numero));
console.log("-------------------------------------")
// 3 - Funções Declarativas
// 1 - Saudação
function saudacao() {
    console.log("Olá! Seja bem-vindo!");
}

saudacao();
console.log("-------------------------------------")
// 3 - Contar Caracteres
function contarCaracteres() {

    let palavra = prompt("Digite uma palavra");

    return palavra.length;
}

console.log("Quantidade de caracteres: " + contarCaracteres());
console.log("-------------------------------------")
// 3 - Maior Número
function maiorNumero() {

    let n1 = Number(prompt("Primeiro número"));

    let n2 = Number(prompt("Segundo número"));

    if (n1 > n2) {
        return n1;
    } else {
        return n2;
    }

}

console.log("Maior número: " + maiorNumero());
console.log("-------------------------------------")
// 3 - Potência
function potencia() {

    let base = Number(prompt("Digite a base"));

    let expoente = Number(prompt("Digite o expoente"));

    return Math.pow(base, expoente);

}

console.log("Resultado: " + potencia());
console.log("-------------------------------------")
//3- Contagem
function contagem(inicio, fim) {

    for (let i = inicio; i <= fim; i++) {
        console.log(i);
    }

}

let inicio = Number(prompt("Número inicial"));

let fim = Number(prompt("Número final"));

contagem(inicio, fim);
console.log("-------------------------------------")
// 4 - Funções com Parâmetros
// 1 - Saudação

function saudacao(nome) {

    console.log("Olá, " + nome + "!");

}

let nome = prompt("Digite seu nome");

saudacao(nome);
console.log("-------------------------------------")
// 4 - Soma de Dois Números

function soma(n1, n2) {

    return n1 + n2;

}

let numero4 = Number(prompt("Primeiro número"));

let numero5 = Number(prompt("Segundo número"));

console.log("Soma: " + soma(numero4, numero5));
console.log("-------------------------------------")
// 4 - Numero Par ou impa
function parOuImpar(numero) {

    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }

}

let numero6 = Number(prompt("Digite um número"));

console.log(parOuImpar(numero6));
console.log("-------------------------------------")
// 4 - Média de Tres Notas
function media(n1, n2, n3) {

    return (n1 + n2 + n3) / 3;

}

let nota1 = Number(prompt("Nota 1"));

let nota2 = Number(prompt("Nota 2"));

let nota3 = Number(prompt("Nota 3"));

console.log("Média: " + media(nota1, nota2, nota3));
console.log("-------------------------------------")
// 4 - Dobro de um numero 
function dobro(numero) {

    return numero * 2;

}

let numero = Number(prompt("Digite um número"));

console.log("Dobro: " + dobro(numero));
console.log("-------------------------------------")
// 4 - Aprovação
function aprovacao(media) {

    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }

}

let mediaAluno = Number(prompt("Digite a média do aluno"));

console.log(aprovacao(mediaAluno));
console.log("-------------------------------------")
// 4 - Calculatora 
function calculadora(n1, n2, operacao) {

    if (operacao === "+") {
        return n1 + n2;
    } else if (operacao === "-") {
        return n1 - n2;
    } else if (operacao === "*") {
        return n1 * n2;
    } else if (operacao === "/") {
        return n1 / n2;
    } else {
        return "Operação inválida!";
    }

}

let numero1 = Number(prompt("Primeiro número"));

let numero2 = Number(prompt("Segundo número"));

let operacao = prompt("Digite a operação (+, -, *, /)");

console.log("Resultado: " + calculadora(numero1, numero2, operacao));
console.log("-------------------------------------")
// Desafio 
function fatorial(numero) {

    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}

let numero = Number(prompt("Digite um número inteiro positivo"));

console.log("Fatorial: " + fatorial(numero));

















