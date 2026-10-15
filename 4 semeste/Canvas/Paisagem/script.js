// js -> paisagem

let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

contexto.fillStyle = "lightcyan"
contexto.fillRect(0, 0, canvas.width, canvas.height)
//chão
contexto.beginPath()
contexto.fillStyle ="green"
contexto.fillRect(0, 300, canvas.width, 100) //faixa na parte de baixo/ grama
//sol
contexto.beginPath()
contexto.arc(300, 100, 40, 0, Math.PI*2)
contexto.fillStyle = "gold"
contexto.fill()
//montanha - linhas retas
contexto.beginPath()
contexto.moveTo(50,300) // onde a linha vai começar
contexto.lineTo(150, 150) //até onde ela vai 
contexto.lineTo(250,300)
contexto.closePath()
contexto.fillStyle = "gray"
contexto.fill()
//nuvem
function nuvem(x,y) {
    contexto.beginPath()
    contexto.arc(x,y, 20, 0, Math.PI*2)
    contexto.arc(x+25, y, 20, 0, Math.PI*2)
    contexto.arc(x+50,y, 20, 0, Math.PI*2)
    contexto.fillStyle = "white"
    contexto.fill()
}
nuvem(50,50)
nuvem(230,80)