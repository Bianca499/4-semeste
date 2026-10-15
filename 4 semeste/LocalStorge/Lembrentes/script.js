let lembrente = document.getElementById("lembrente")
let salvar = document.getElementById("salvar")
let apagar = document.getElementById("Apagar")
let mensagem = document.getElementById("mensagem")

let lembrenteSalvo = localStorage.getItem("lembrente")
if(lembrenteSalvo) {
    mensagem.innerText = lembrenteSalvo
}

salvar.addEventListener("click", function() {
    localStorage.setItem("lembrente", lembrente.value)
    mensagem.innerText = lembrente.value
})

apagar.addEventListener("click", function() {
    localStorage.removeItem("lembrente")
    mensagem.innerText = ""
})