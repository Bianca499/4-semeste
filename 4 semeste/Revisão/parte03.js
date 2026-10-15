//revisão parte 03 - parte03.js

//Funções de textos

let nome = "Bianca Soares"
console.log(nome.length) //length = tamanho

Console.log("------------------------")
//Maíusculas e Minusculas
let frasse = " Hoje É Sexta "
console.log(frase)
console.log(frase.toUpperCase()) //maiusculas
console.log(frase.toLowerCase()) //minusculas

console.log(frase.trim()) //remove os espaços

console.log("------------------------")
let frase2 = "Hoje o dia esta bonio"
let palavaAntiga = "bonito"
let palavraNova = "lindo"
console.log(frase2)
console.log(frase.replace(palavraAntiga, palavraNova))

//Verifica se essa existe
let buscar = "dia"
console.log(frase2.incluedes(buscar))
console.log("-----------------------")
let palavra = "senai"
//             01234
console.log(palavra.charAt(1))
//que letra está nessa posição
console.log("----------------------")
let texto = "Eu gosto de animais"
console.log(texto.split("0"))
console.log("----------------------")
console.log("----------------------")
//Math
//número aleatorios entre 0 e 1 
console.log(Math.random())
//número aleatorio entre 0 e 1
let num1 = Math.random() + 1
console.log(num1) // entre 1 e 2
let num2 = Math.random() * 5 // 0  a 5
console.log(num2)
let num3 = Math.floor(Math.random() * 5)
console.log(num3)
let num4 = Math.floor(Math.random() * 5) + 1
//         (Math.rondom() * quantidade) + inicio
console.log(num4) // 1 a 5
let num5 = Math.floor(Math.random() * 11) + 10
//                           possibilidade + inicio
console.log(num5) // 10 e 20
console.log("----------------------")
//Arredondaar
let n3 = 5.3
console.log(Math.ceil(numero)) //cima
console.log(Math.floor(numero)) //baixo
console.log(Math.round(numero)) // justo

//Funções Matemáticas
let valores =  [ 10, 5, 9, 3, 1, 65, 13]
// Maior numero 
let valores =  [ 10, 5, 9, 3, 1, 65, 13]
//menoor numero

//Raiz quadrada
console.log(Math.sqrt(25)) //5
//Potência
console.log(Math.pow(2,4)) //2 *2 *2 *2 = 16
//Valor absoluto
console.log(Math.abs(-65813))

console.log("---------------------")
console.log("---------------------")
//Função Declarativa
function escola() {
    console.log("Luiz Eulalio de Bueno Vidigal Filho")
}
function soma() {
    let num1 = 5
    let num2 = 7
    console.log(num1 + num2)
}
escola()
soma()
function idade(nascimento) {
    let anos = 2026 - nascimento
    console.log("Você tem", anos, "anos")
    }
    let valor = Number(prompt("Em que ano você nasceu?"))
    idade(2000) // 26
    idade (valor)

    function banco(saldo, saque) {
        if 
        let sobrou = saldo - saque
        console.log(sobrou)
    }
    branco(300, 500)