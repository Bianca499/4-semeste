let tarefa = document.getElementById("tarefas")
let adcionar = document.getElementById("adicionar")
let lista = document.getElementById("lista")
let tarefas = []

// Pegando as Tarefas Salvas
//Pegar as tarefas do localStrorage
let tarrefasSalva = localStorage.getItem("tarefas")

if(tarrefasSalva) {
    tarefas = JSON.parse(tarrefasSalva)
} else {
    tarefas = {}
}


function mostrarTarefas() {
    // Apaga se já existia algo antes
    lista.innerText = ""
    //[ler, estudar, varer]
    // 0     1         2
    //Verifica todas as tarefas
    tarefas.forEach(function(tarefaAtual, Indece) {
        //Criar um na lista 
        let item = document.createElement("li")
        item.innerText = tarefaAtual

        //Criar um botão
        let apagar = document.createElement("button")
        apagar.innerText = "Apagar"
        //Quando clicar apaga a tarefa
        apagar.addEventListener("click", function() {
            // remover essa tarefa  do array
            tarefas.splice(Indice,1)
            //Atualiza o localStrore
            localStorage.setItem("tarefas", JSON.stringify(tarefas))
        })
        mostrarTarefas() //Mostar  as atarefas atualizadas
 })
 item.appendChild(apagar)
 // colocamos o LID
 lista.appendChild(item)
}
/*
[Ler, Estudar, Lavar, Varrer, Beber Agua] */

// Adicionando a tarefa
adiconar.addEventListener("click", function() {
    //Pega o que foi digitando
    let novaTarefa = tarefa.value
    //Verifica se não está vazio
    if (novaTarefa != "") {
        tarefa.push(novaTarefa)

localStorage.setItem("tarefas",JSON.stringify(tarefas))
// Limpar o input
tarefa.value = ""
mostrarTarefa()
    
    }

})
mostrarTarefas()
//tarefas = [Comer, beber, andar]
//Stringify -> transforme em texto