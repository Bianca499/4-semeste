/*Contagem ate o natal - //25/12/2026 */

function contarDias() {
    let hoje = new Date();
    console.log(hoje)
               // ano, mes , dia
let natal = new Date(2026, 11, 25); // 11 representa dezembro (0-11)
    
// calcular a diferença dos dias 
// 1s -> 1000
let diferenca = natal - hoje
console.log(diferenca)
//milisegundos  -> segundos -> minutos -> hporas -> dias


let dezembro = document.getElementById("dezembro")


// Converter os valores 
let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
console.log(dias)
  
//horas restantes
let horas = Math.floor(diferenca / 1000 / 60 / 60) % 24
console.log(horas)

//minutos restantes 
let minutos = Math. floor(diferenca/1000 / 60) % 60
console.log(minutos)

//segundos restantes
let segundos = Math.floor(diferenca/1000) % 60
console.log(segundos)

//Mostar o resultado final 
dezembro.innerText = dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos"
}
setInterval(contarDias, 1000)


