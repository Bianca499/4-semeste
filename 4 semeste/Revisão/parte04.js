//Função Anônima e Arrow function

function saudacao2(nome) {
    console.log("oi" + nome);
}
saudacao2("bianca");

// funçção Anônima e Arrow function
let saudacao = function() {
    console.log("oi")
}
console.log(saudacao())

// Pedir dois números e mostrar a soma
let soma = function(n1,n2) {
    return n1 + n2
}
console.log(soma(3,9))

//Perguntar quantos anos tem e mostrar quantos dias viveu
let viveu = function(anos) {
    return anos * 365 
}
let idade= Number(prompt("Qual sua idade?"))
console.log(viveu(idade))

//Arrow Function
// => Function
let saudacao1 = (nome) => {
    console.log("oii" + nome)
}
saudacao1("Bianca")

//Multiplicar dois Numeros
let mult = (n1,n2) => {
    return n1 * n2
}
console.log(mult(6,4))

/* Exercicio */
let exta = (horas) => {
    if(horas <=10) {
        return horas * 20 
    } else {
        return horas * 15
    }
}
let horas = Number(prompt("Quantas horas trabalhou hj?"))
console.log(exta(horas))

// DOM - Manipulsção

let texto = document.getElementById("texto")
//          noHTML.PegueoElemntoPeloID

function troca() {
    texto.innerHTML = "<b>Hoje é quinta</b>"
}
function cor() {
    texto.style.color="pink"
    if(texto.style.backgroundColo == "orange") {
        texto.style.backgroundColor="blue"
        texto.style.display = "nome"
    } else {
      texto.style.backgroundColor="red" 
      texto.style.color="orange" 
      texto.style.display ="block" 
    }
   
}
function aumentar() {
    texto.style.fontSize= "50px"
}
function diminuir() {
    texto.style.fontSize= "10px"
}

let zero = document.getElementById("zero")
let numero0 = 0
function mais() {
numero0++ //1
zero.innerText = numero0
}
function menos() {
numero0-- // -1
zero.innertText = numero0
}
function zerar() {
    numero0 = 0
    zero.innerText = "numero0"

}