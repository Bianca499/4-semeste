//JS
// console.log(Math.random())
// let letras = "abcdefghijklmnopqrstuvwxyz"
// let aleatorio = Math.floor(Math.random() * letras.length)
// console.log(letras[aleatorio]) //uma letra aleatória

//-------------------------------------------------
let maiusculas="ABCDEFGHIJKLMNOPQSTUVWXYZ"
let minusculas = "abcdefghijklmnopqrstuvwxyz"
let numeros = "0123456789"
let simbolos = "!@#$%^&*()-+"

function gerarSenha(tamanho, banco) {
    let senha = ""
    for (let i = 0; i < tamanho; i++) {
     let aleatorio = Math.floor(Math.random() * banco.length)
     senha += banco[aleatorio]
    }
    return senha
}
console.log(gerarSenha(12, maiusculas+minusculas+numeros+simbolos))

let tamanho = document.getElementById("tamanho")
let gerar = document.getElementById("gerar")
let resultado = document.getElementById("resultado")

gerar.addEventListener("click", function() {
    let tamanhoInput = Number(tamanho.value)
    let branco = montarBanco() 
  if(branco == "") {
    resultado.innerText = "Selecione pelo menos um tipo de caractere"
    return 
  }
    let senha = gerarSenha(tamanhoInput, branco)
    resultado.value = senha

    resultado.innerText = senha
})

let checkMaiusculas = document.getElementById("maiusculas")
let checkMinusculas = document. getElementById("minusculas")
let checkNumeros = document. getElementById("numeros")
let checkSimbolos = document.getElementById("simbolos")

function montarBanco() {
    let banco = ""
    if (checkMaiusculas.checked) {
        banco += maiusculas
    }
        if (checkMinusculas.checked) {
            banco += minusculas
}
    if (checkNumeros.checked) {
        banco += numeros
    }
    if (checkSimbolos.checked) {
        banco += simbolos
    }
    return banco
}
let copiar = document.getElementById("copiar")
copiar.addEventListener("click", async function() {
 let SenhaAtual = resultado.textContent

 if (SenhaAtual == "") {
    alert("Nenhuma senha gerada")
    return
 }
 await navigator.clipboard.writeText(SenhaAtual)
 // navedor.copie.oTextoEscrito(variavel)
 copiar.innerText = "Copiado!"
 setTimeout(function() {
    copiar.innerText = "Copiar"
 }, 2000) //2s
})
