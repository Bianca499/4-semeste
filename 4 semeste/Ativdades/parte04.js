// ==========================================
// FUNÇÃO ANÔNIMA
// ==========================================

// 1 - Mensagem
const mensagem = function() {
    console.log("Olá! Esta é uma mensagem.");
};

// Chamando a função
mensagem();


// 2 - Dobro
const dobro = function(numero) {
    return numero * 2;
};

console.log("Dobro:", dobro(5));


// 3 - Média
const calcularMedia = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
};

console.log("Média:", calcularMedia(7, 8, 9));


// 4 - Média + situação

const calcularMediaAluno = function(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
};

const verificarSituacao = function(media) {
    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
};

const mediaAluno = calcularMediaAluno(7, 8, 6);

console.log("Média do aluno:", mediaAluno);
console.log("Situação:", verificarSituacao(mediaAluno));


// 5 - Operações matemáticas

const somar = function(numero1, numero2) {
    return numero1 + numero2;
};

const subtrair = function(numero1, numero2) {
    return numero1 - numero2;
};

const multiplicar = function(numero1, numero2) {
    return numero1 * numero2;
};

const dividir = function(numero1, numero2) {
    return numero1 / numero2;
};

console.log("Soma:", somar(10, 5));
console.log("Subtração:", subtrair(10, 5));
console.log("Multiplicação:", multiplicar(10, 5));
console.log("Divisão:", dividir(10, 5));


// ==========================================
// ARROW FUNCTIONS
// ==========================================

// 1 - Multiplicação

const multiplicacao = (numero1, numero2) => {
    return numero1 * numero2;
};

console.log("Multiplicação:", multiplicacao(4, 5));


// 2 - Triplo

const triplo = (numero) => {
    return numero * 3;
};

console.log("Triplo:", triplo(5));


// 3 - Par ou Ímpar

const parOuImpar = (numero) => {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
};

console.log("Par ou Ímpar:", parOuImpar(7));


// 4 - Maior número

const maiorNumero = (numero1, numero2) => {
    if (numero1 > numero2) {
        return numero1;
    } else {
        return numero2;
    }
};

console.log("Maior número:", maiorNumero(10, 20));


// 5 - Positivo, negativo ou zero

const verificarNumero = (numero) => {
    if (numero > 0) {
        return "Positivo";
    } else if (numero < 0) {
        return "Negativo";
    } else {
        return "Zero";
    }
};

console.log("Número:", verificarNumero(-5));


// ==========================================
// DOM – MANIPULAÇÃO
// ==========================================

// 1 - Trocando textos

function trocarTexto() {
    document.getElementById("texto").textContent =
        "Texto alterado com JS!";
}


// 2 - Personalizando a div

function mudarFundo() {
    document.getElementById("minhaDiv").style.backgroundColor = "pink";
    document.getElementById("minhaDiv").style.color = "white";
}


// 3 - Personalização

function personalizar() {

    // Altera o texto do parágrafo
    document.getElementById("paragrafo").style.color = "purple";
    document.getElementById("paragrafo").style.fontSize = "20px";

    // Altera o título
    document.getElementById("titulo").style.color = "green";
    document.getElementById("titulo").style.fontSize = "35px";
}


// 4 - Escondendo e mostrando o elemento

function esconderMostrar() {

    const div = document.getElementById("divEsconder");

    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}