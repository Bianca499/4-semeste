// Operator Ternário
/*
if (condição) {
se verdadeiro
} else {
    se falso 
}
*/

let idade = 20;
let resultado = idade >= 18 ? "Maior de idade" : "Menor de idade"
//                  condição       verdadeiro         falso
console.log(resultado)

let nota = 5
let situacao = nota > 9 ? "Aprovado" : nota > 7 ?  "Recuperacao" : nota <= 7 ? "Reprovado" : "Nota inválida"
console.log(situacao)
console.log("--------------------------------------------------")
// Laçõs de repetição 
// while- enquanto
let numero = 1
while ( numero <= 5) {
    console.log(numero)
    numero++ //+1
}
let numero2 = 10
while( numero2 >= 0) {
    console.log(numero2)
    numero2 -= 2 //numero2 = nuemro2 - 2
}
// let palavra = "senai"
// while( palavra == "senai") {
//     console.log( "Acertou")
//     palavra = promt( "Digite uma nova palavra:")
// }
console.log("------------------------------")
// Do...while
let num = 1
do {
 console.log(num)
 num += 1
} while(num <= 5)

let dobro = 2
do {
    console.log(dobro)
    dobro *= 2
} while ( dobro <= 100)
    console.log( "------------------------------")

// for 
for ( let i = 1; i <= 5; i++) {
    console.log(i)
}
// tabuada 
let num1 = 5
for(let i = 1; i <= 10; i++) {
    let tabuada = num1 *i
    console.log(tabuada)
}
console.log("------------------------------")

// ARRAY
let frutas = [ "maça", "banana", "laranja" ]
//               0          1       2
// tamanho = 3
console.log(frutas[1]) // banana
console.log(frutas)

frutas.pop() // remove o utimo elemnto 
console.log(frutas)

frutas.push("uva") // colocar no final 
console.log(frutas)

frutas.shift() // tira o primento elemnto 
console.log(frutas)

frutas.unshift("morango") // coloca no começo
console.log(frutas)

console.log(frutas.length) //lenght = tamanho = mede o array

frutas.includes("manga") // verifica se tem um valor no vetor e retorna o verdadeiro ou falso (true ou false)

console.log(frutas.indexOf("uva")) // retorna a posição do elemento se nao encontar retorna -1

console.log(frutas.reverse()) // inverte o array

console.log(frutas.short()) // organiza os elemntos no array em ordem alfabetica