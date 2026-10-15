let input = document.getElementById("input")
let botao = document.getElementById("botao")
let resultado = document.getElementById("resultado")

async function buscarPokemon(nome) {
    try {
        let resposta = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome)

        if(!resposta.ok) {
            resultado.innerHTML = "<p> Pokemon não encontrado </p>"
            return
        } // Se não encontrar o pokemon
        //A variavel dados recebe a json e vai fazer as buscas do que precisamos/solicitamos.
        let dados = await resposta.json()
        resposta.innerHTML = " "
        resultado.innerHTML = ""
         
        let nomePokemon = document.createElement("h2")
        nomePokemon.innerHTML = dados.name
          // pegando a imagem do ppokemon 
        let imagemPokemon = document.createElement("img")
        imagemPokemon.src = dados.sprites.front_default
          //Pegando o tipo do pokemon
        let tipoPokemon = document.createElement("p")
        let tipo = "Tipo"
        for(let info of dados.types) {
            tipo += info.type.name + ""
        }
        tipoPokemon.innerHTML = tipo

        resultado.appendChild(nomePokemon)
        resultado.appendChild(imagemPokemon)
        resultado.appendChild(tipoPokemon)
    } catch (erro) {
        resultado.innerHTML = "Erro ao fazer a conexão"
    }
}
botao.addEventListener("click", function () {
    buscarPokemon(input.value.toLowerCase())

})