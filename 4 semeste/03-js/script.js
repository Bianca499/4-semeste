// =====================================
// EXERCÍCIOS 1, 2 E 3 - BARRA
// =====================================

const canvasBarra = document.getElementById("canvasBarra");
const ctx = canvasBarra.getContext("2d");

const slider = document.getElementById("progresso");

function desenharBarra() {

    // Limpa o canvas
    ctx.clearRect(0, 0, canvasBarra.width, canvasBarra.height);

    // Medidas da moldura
    const x = 10;
    const y = 20;
    const largura = 380;
    const altura = 60;

    // EXERCÍCIO 1
    // Moldura azul com espessura 20
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 20;
    ctx.strokeRect(x, y, largura, altura);

    // EXERCÍCIO 3
    // Pega o valor atual do slider
    const valor = Number(slider.value);

    // Espaço interno da moldura
    const larguraInterna = largura - 20;
    const alturaInterna = altura - 20;

    // Calcula a largura proporcional
    const larguraBarra = larguraInterna * valor / 100;

    // EXERCÍCIO 2/3
    // Barra preenchida
    ctx.fillStyle = "blue";
    ctx.fillRect(
        x + 10,
        y + 10,
        larguraBarra,
        alturaInterna
    );
}

// Atualiza quando mexer no slider
slider.addEventListener("input", desenharBarra);

// Desenha inicialmente
desenharBarra();


// =====================================
// EXERCÍCIO 4 - BANDEIRAS
// =====================================

const canvasBandeiras = document.getElementById("bandeiras");
const ctxBandeiras = canvasBandeiras.getContext("2d");


// ---------- JAPÃO ----------
function japao(x, y) {

    // Fundo branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x, y, 60, 60);

    // Círculo vermelho
    ctxBandeiras.fillStyle = "red";
    ctxBandeiras.beginPath();
    ctxBandeiras.arc(x + 30, y + 30, 18, 0, Math.PI * 2);
    ctxBandeiras.fill();
}


// ---------- ITÁLIA ----------
function italia(x, y) {

    // Verde
    ctxBandeiras.fillStyle = "green";
    ctxBandeiras.fillRect(x, y, 20, 60);

    // Branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x + 20, y, 20, 60);

    // Vermelho
    ctxBandeiras.fillStyle = "red";
    ctxBandeiras.fillRect(x + 40, y, 20, 60);
}


// ---------- POLÔNIA ----------
function polonia(x, y) {

    // Branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x, y, 60, 30);

    // Vermelho
    ctxBandeiras.fillStyle = "red";
    ctxBandeiras.fillRect(x, y + 30, 60, 30);
}


// ---------- URUGUAI ----------
function uruguai(x, y) {

    // Fundo branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x, y, 60, 60);

    // Faixas azuis
    ctxBandeiras.fillStyle = "#5BA8E6";

    for (let i = 0; i < 7; i++) {
        if (i % 2 === 1) {
            ctxBandeiras.fillRect(x, y + i * 60 / 7, 60, 60 / 7);
        }
    }

    // Cantão branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x, y, 25, 25);

    // Sol
    ctxBandeiras.fillStyle = "gold";
    ctxBandeiras.beginPath();
    ctxBandeiras.arc(x + 12, y + 12, 7, 0, Math.PI * 2);
    ctxBandeiras.fill();
}


// ---------- ALEMANHA ----------
function alemanha(x, y) {

    // Preto
    ctxBandeiras.fillStyle = "black";
    ctxBandeiras.fillRect(x, y, 60, 20);

    // Vermelho
    ctxBandeiras.fillStyle = "red";
    ctxBandeiras.fillRect(x, y + 20, 60, 20);

    // Amarelo
    ctxBandeiras.fillStyle = "gold";
    ctxBandeiras.fillRect(x, y + 40, 60, 20);
}


// ---------- FRANÇA ----------
function franca(x, y) {

    // Azul
    ctxBandeiras.fillStyle = "blue";
    ctxBandeiras.fillRect(x, y, 20, 60);

    // Branco
    ctxBandeiras.fillStyle = "white";
    ctxBandeiras.fillRect(x + 20, y, 20, 60);

    // Vermelho
    ctxBandeiras.fillStyle = "red";
    ctxBandeiras.fillRect(x + 40, y, 20, 60);
}


// Desenhando as 6 bandeiras
japao(10, 10);
italia(80, 10);
polonia(150, 10);
uruguai(220, 10);
alemanha(290, 10);
franca(80, 90);


// =====================================
// EXERCÍCIO 5 - CASA
// =====================================

const canvasCasa = document.getElementById("casa");
const ctxCasa = canvasCasa.getContext("2d");


// Corpo da casa - azul claro
ctxCasa.fillStyle = "lightblue";
ctxCasa.fillRect(100, 130, 200, 120);


// Telhado triangular - vinho
ctxCasa.fillStyle = "maroon";
ctxCasa.beginPath();

ctxCasa.moveTo(80, 130);
ctxCasa.lineTo(200, 50);
ctxCasa.lineTo(320, 130);

ctxCasa.closePath();
ctxCasa.fill();


// Janela redonda preta
ctxCasa.fillStyle = "pink";
ctxCasa.beginPath();
ctxCasa.arc(250, 175, 25, 0, Math.PI * 2);
ctxCasa.fill();


// Porta marrom
ctxCasa.fillStyle = "brown";
ctxCasa.fillRect(150, 180, 45, 70);