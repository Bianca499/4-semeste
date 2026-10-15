let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

function semaforo() {
    contexto.fillStyle = "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 30, 0, Math.PI*2)
    contexto.fillStyle = "darkred"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 180, 30, 0, Math.PI*2)
    contexto.fillStyle = "olive"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 260, 30, 0, Math.PI*2)
    contexto.fillStyle = "darkgreen"
    contexto.fill()
}
semaforo()

let acesso = "vermelho" 

function Novosemaforo() {
    contexto.fillStyle = "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 30, 0, Math.PI*2)
    contexto.fillStyle = "darkred"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 180, 30, 0, Math.PI*2)
    if(acesso == "amarelo") {
        contexto.fillStyle = "green"
    } else {
        contexto.fillStyle = "darkgreen"
    }
    contexto.fillStyle = "olive"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 260, 30, 0, Math.PI*2)
    contexto.fillStyle = "darkgreen"
    contexto.fill()

    function proximaLuz() {
        if(aceso == "vermelho") {
            acesso = "verde"
        } else if (aceso == "verde") {
            aceso = "amarelho"
        } else if (acesso == "amarelho") {
            acesso = "vermelho"
        }
        Novosemaforo()
    }
// setInterval(proximaLuz, 2000) //2s
let trcoa = document.getElementById("troca")
trcoa.addEventListener("click", proximaLuz)
}
