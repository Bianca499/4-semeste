let input = document.getElementById("input")
let salvar = document.getElementById("salvar")
let mensagem = document.getElementById("mensagem")

// verificar se ja existe um nome salvo 
// Busca o nome que ta salvo 
let nomeSalvo = localStorage.getItem("nome")
// Se existir um nome salvo 
if(nomeSalvo) {
    // mostar na tela 
    mensagem.innerText = "oi" + nomeSalvo
}
salvar.addEventListener("click", function() {
    // mensagem.innerText = "oi" + input.value
    // localStorage.setItem("nome", "Bianca")
    // let nomeLS = localStorage.getItem("nome")
    // console.log(nomeLS)



    localStorage.setItem("nome", input.value)
    nomeSalvo = localStorage.getItem("nome")
    mensagem.innerText = "oi " + nomeSalvo
})