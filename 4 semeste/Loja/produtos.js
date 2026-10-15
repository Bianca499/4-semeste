//produtos.js
let produtos = [
    {id: 1, nome: "picina", preco: 150.00, categoria: "pet", imagem: "img/picina.webp"},
    {id: 2, nome: "racao", preco: 300.00, categoria: "pet", imagem: "img/racao.webp"},
    {id: 3, nome: "brinquedo", preco: 200.00, categoria: "pet", imagem: "img/brinquedos interativos.jpg"},
    {id: 4, nome: "coleira", preco: 220.00, categoria: "pet", imagem: "img/coleira de cachorro.jpg"},
    {id: 5, nome: "tinta", preco: 50.00, categoria: "pet", imagem: "img/tinta para o cachorro.webp"},
    {id: 6, nome: "roupinha ", preco: 400.00, categoria: "pet", imagem: "img/roupinha de cachorro.jpg"}

]
let vitrine = document.getElementById("produtos")
function mostrarProdutos(lista) {
    vitrine.innerHTML = "" // tirar tudo antes de mostar
    if (lista.length == 0) {
        vitrine.innerText = "Nenhum produto cadastrado"
        return
    }
    for(let produto of lista) {
        let card = document.createElement("article")
    
        let imagem = document.createElement("img")
       imagem.src = produto.imagem
    imagem.alt = produto.nome

      let nome = document. createElement("h3")
      nome.innerText = produto.nome

      let preco = document.createElement("p")
      preco.innerText = produto.preco

      let adicionar = document. createElement("button")
     adicionar. innerText = "Adicionar ao carrinho"

    //  adicionar.addEventListener("click", function() {
    //   adicionarCarrinho(produto)
    // })
    card.appendChild(imagem)
   card.appendChild(nome)
  card.appendChild(preco)
  card.appendChild(adicionar)
   vitrine.appendChild(card)
    }
}
mostrarProdutos(produtos)

let categorias = document.getElementById("categorias")
function carregarCategorias () {
    let categorias = []
    for(let produtos of  produtos) {
        if(!categorias.incluedes(produto.categorias)) {
            categorias.push(produto.categoria)

        }
    }
    for(let categoria of categoria) {
        let opcao = document.createElement("option")
        opcao. value = categoria
        opcao.innerText = categoria
      categoriasSelect.appendChild(opcao)
    }
}
carregarCategorias()