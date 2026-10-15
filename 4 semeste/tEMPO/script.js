//js
let agora = new Date() // uma data completa de hoje
console.log(agora)

let especifica = new Date(2026, 11, 10) // 10/12/2026
// 0 a 11 -> meses
// ano mês dia 
console.log(especifica)

// Separa os elementos 
console.log(agora.getFullYear()) //ano, 2026
console.log(agora.getMonth()) // mês, 0-11
console.log(agora.getDate()) // dia, 1-31
console.log(agora.getDay()) // dia da semana, 0-6, Domingo 0- sabado - 6
console.log(agora.getHours()) // horas, 0,23
console.log(agora.getMinutes()) // minutos, 0-59
console.log(agora.getSeconds()) // segundos, 0-59

//Formatar uma data 
// HH:MM:SS   08:40:10
function relogio() {
    let tempo = document.getElementById("tempo")
    let horario = new Date()
    let horas = horario.getHours()
    let minutos = horario.getMinutes()
    let segundos = horario.getSeconds()
    
    //console.log(horas +":"+ minutos +": +segundos")

    

    
    let horaFormatada= String(horas).padStart(2, "0")
    let minutosFormato = String(minutos).padStart(2, "0")
    let segundosFormato = String(segundos).padStart(2, "0")
    console.log(horaFormatada+":"+minutosFormato+":"+segundosFormato+": "+segundosFormato)
        tempo.innerText = horaFormatada + ":" +
        minutosFormato+":"+segundosFormato
}
setInterval(relogio,1000) //1000ms = 1s
//----------------------------------------------------
console.log("-------------------------------")
//Simular uma contagem regressiva de 10 minutos
let segundosRestantes = 1 * 60; // 10 minutos em segundos
let tempolizador
let contando
console.log(segundosRestantes)
// 10:00   09:57    05:23
function mostarTempo() {
    let minutos =  Math.floor(segundosRestantes / 60)
    let segundos = segundosRestantes % 60
    let contagem = document.getElementById("contagem")
    
    let horario = String(minutos).padStart(2,  "0") + ":" + String(segundos).padStart(2, "0")
    console.log(horario)
    contagem.innerText = horario
}
function atualizar() {
    if(segundosRestantes <= 0) {
        clearInterval(tempolizador)
        contando = false
        let contagem = document.getElementById("contagem")
        contagem.innerText = "Tempo esgotado"
        return
    }
    mostarTempo()
    segundosRestantes--
}
mostarTempo()
tempolizador = setInterval(atualizar, 1000) 

let iniciar = document.getElementById("iniciar")
let pausar = document.getElementById("pausar")

iniciar.addEventListener("click", function() {
    if (contando) {
        contando = true
        tempolizador = setInterval(atualizar, 1000)
    }
})
pausar.addEventListener("click", function() {
    contando = false
    clearInterval(tempolizador)
})
mostarTempo()
//----------------------------------------------
//Contagem ate o natal - 25/12/2026
